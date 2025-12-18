import { defineStore } from 'pinia';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    signInWithPhoneNumber,
    RecaptchaVerifier,
    signInAnonymously
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import type { IUser } from '~/types';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as IUser | null,
        confirmationResult: null as any,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async loginWithPhoneDirectly(phoneNumber: string) {
            console.log("loginWithPhoneDirectly called with:", phoneNumber);
            this.loading = true;
            this.error = null;
            try {
                const { $auth, $db } = useNuxtApp();
                // Use anonymous login to simulate a session
                const userCredential = await signInAnonymously($auth);

                if (userCredential.user) {
                    // Update profile with phone number as display name for demo purposes
                    await updateProfile(userCredential.user, { displayName: phoneNumber });

                    // Save to Firestore
                    const newUser: IUser = {
                        uid: userCredential.user.uid,
                        email: null,
                        displayName: phoneNumber,
                        role: 'customer'
                    };
                    await setDoc(doc($db, 'users', userCredential.user.uid), newUser);

                    this.user = newUser;
                }
            } catch (err: any) {
                console.error("Login error:", err);
                this.error = err.message;
                throw err;
            } finally {
                this.loading = false;
            }
        },

        initAuth() {
            if (process.server) return; // Don't run on server
            const { $auth, $db } = useNuxtApp();
            onAuthStateChanged($auth, async (firebaseUser) => {
                if (firebaseUser) {
                    // Try to fetch role from Firestore
                    let role: 'customer' | 'admin' = 'customer';
                    try {
                        const userDoc = await getDoc(doc($db, 'users', firebaseUser.uid));
                        if (userDoc.exists()) {
                            role = userDoc.data().role as 'customer' | 'admin';
                        }
                    } catch (e) {
                        console.error("Error fetching user role", e);
                    }

                    this.user = {
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        displayName: firebaseUser.displayName || 'Kullanıcı',
                        role: role
                    };
                } else {
                    this.user = null;
                }
            });
        },

        async register(email: string, pass: string, name: string) {
            this.loading = true;
            this.error = null;
            try {
                const { $auth, $db } = useNuxtApp();
                const userCredential = await createUserWithEmailAndPassword($auth, email, pass);
                if (userCredential.user) {
                    await updateProfile(userCredential.user, { displayName: name });

                    // Save user to Firestore
                    const newUser: IUser = {
                        uid: userCredential.user.uid,
                        email: userCredential.user.email,
                        displayName: name,
                        role: 'customer'
                    };
                    await setDoc(doc($db, 'users', userCredential.user.uid), newUser);

                    this.user = newUser;
                }
            } catch (err: any) {
                this.error = err.message;
                throw err;
            } finally {
                this.loading = false;
            }
        },

        async login(email: string, pass: string) {
            this.loading = true;
            this.error = null;
            try {
                const { $auth } = useNuxtApp();
                await signInWithEmailAndPassword($auth, email, pass);
                // State update handled by onAuthStateChanged
            } catch (err: any) {
                this.error = err.message;
                throw err;
            } finally {
                this.loading = false;
            }
        },

        async logout() {
            const { $auth } = useNuxtApp();
            await signOut($auth);
            this.user = null;
        }
    }
});

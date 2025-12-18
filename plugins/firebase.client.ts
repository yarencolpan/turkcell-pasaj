import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { defineNuxtPlugin, useRuntimeConfig } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    // Demo configuration for Emulator usage
    const firebaseConfig = {
        apiKey: "demo-api-key",
        authDomain: "demo-turkcell-pasaj.firebaseapp.com",
        projectId: "demo-turkcell-pasaj",
        storageBucket: "demo-turkcell-pasaj.appspot.com",
        messagingSenderId: "123456789",
        appId: "1:123456789:web:abcdef"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    // Connect to emulators in development
    if (process.env.NODE_ENV === 'development') {
        connectFirestoreEmulator(db, 'localhost', 8081);
        connectAuthEmulator(auth, 'http://localhost:9099');
        console.log('Connected to Firebase Emulators');
    }

    return {
        provide: {
            db,
            auth
        }
    }
});

import { defineStore } from 'pinia';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import type { IProduct } from '~/types';

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [] as IProduct[],
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchProducts() {
            this.loading = true;
            this.error = null;
            try {
                const { $db } = useNuxtApp();
                const querySnapshot = await getDocs(collection($db, 'products'));
                this.products = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as IProduct[];
            } catch (err: any) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },
        async addProduct(product: Omit<IProduct, 'id'>) {
            this.loading = true;
            try {
                const { $db } = useNuxtApp();
                const docRef = await addDoc(collection($db, 'products'), product);
                this.products.push({ id: docRef.id, ...product });
            } catch (err: any) {
                this.error = err.message;
                throw err;
            } finally {
                this.loading = false;
            }
        },
        async deleteProduct(id: string) {
            this.loading = true;
            try {
                const { $db } = useNuxtApp();
                await deleteDoc(doc($db, 'products', id));
                this.products = this.products.filter(p => p.id !== id);
            } catch (err: any) {
                this.error = err.message;
                throw err;
            } finally {
                this.loading = false;
            }
        }
    }
});

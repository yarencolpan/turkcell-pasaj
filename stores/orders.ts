import { defineStore } from 'pinia';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import type { IOrder, ICartItem } from '~/types';

export const useOrderStore = defineStore('orders', {
    state: () => ({
        orders: [] as IOrder[],
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async placeOrder(userId: string, items: ICartItem[], totalAmount: number) {
            this.loading = true;
            this.error = null;
            try {
                const { $db } = useNuxtApp();
                const orderData = {
                    userId,
                    items,
                    totalAmount,
                    status: 'pending',
                    createdAt: serverTimestamp()
                };

                await addDoc(collection($db, 'orders'), orderData);
                // Optionally clear cart here if linking stores
            } catch (err: any) {
                this.error = err.message;
                throw err;
            } finally {
                this.loading = false;
            }
        }
    }
});

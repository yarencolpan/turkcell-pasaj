import { defineStore } from 'pinia';
import type { IProduct, ICartItem } from '~/types';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as ICartItem[],
    }),
    getters: {
        totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    },
    actions: {
        addToCart(product: IProduct) {
            const existingItem = this.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(productId: string) {
            const index = this.items.findIndex(item => item.id === productId);
            if (index !== -1) {
                this.items.splice(index, 1);
            }
        },
        updateQuantity(productId: string, quantity: number) {
            const item = this.items.find(item => item.id === productId);
            if (item) {
                item.quantity = quantity;
                if (item.quantity <= 0) {
                    this.removeFromCart(productId);
                }
            }
        },
        clearCart() {
            this.items = [];
        }
    }
});

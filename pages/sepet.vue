<template>
  <div class="cart-page">
    <div class="container">
      <h1 class="page-title">Sepetim ({{ cartStore.totalItems }} Ürün)</h1>
      
      <div v-if="cartStore.items.length === 0" class="empty-cart">
        <div class="empty-icon">🛒</div>
        <p>Sepetinizde ürün bulunmamaktadır.</p>
        <NuxtLink to="/" class="btn-start">Alışverişe Başla</NuxtLink>
      </div>
      
      <div v-else class="cart-content">
        <div class="cart-items">
          <MoleculesCartItemRow
            v-for="item in cartStore.items"
            :key="item.id"
            :image="item.imageUrl"
            :title="item.name"
            color="Standart"
            :unitPrice="Number(item.price)"
            :qty="item.quantity"
            :totalPrice="Number(item.price) * item.quantity"
            seller="Turkcell"
            shipping="Ücretsiz Kargo"
            @inc="cartStore.updateQuantity(item.id!, item.quantity + 1)"
            @dec="cartStore.updateQuantity(item.id!, item.quantity - 1)"
            @remove="cartStore.removeFromCart(item.id!)"
          />
        </div>
        
        <div class="cart-sidebar">
          <div class="summary-card">
            <h3>Sipariş Özeti</h3>
            <div class="summary-row">
              <span>Ürünler Toplamı</span>
              <span>{{ formattedTotalPrice }} TL</span>
            </div>
            <div class="summary-row highlight">
              <span>Kargo</span>
              <span>Bedava</span>
            </div>
            <div class="divider"></div>
            <div class="summary-total">
              <span>Toplam</span>
              <span class="total-amount">{{ formattedTotalPrice }} TL</span>
            </div>
            
            <button class="btn-checkout" @click="checkout">
              {{ orderStore.loading ? 'İşleniyor...' : 'Siparişi Tamamla' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
import { useOrderStore } from '~/stores/orders';
import { useUserStore } from '~/stores/user';

const cartStore = useCartStore();
const orderStore = useOrderStore();
const userStore = useUserStore();
const router = useRouter();

const formattedTotalPrice = computed(() => {
  return cartStore.totalPrice.toLocaleString('tr-TR');
});

async function checkout() {
  if (!userStore.user) {
    alert('Sipariş vermek için giriş yapmalısınız.');
    router.push('/login');
    return;
  }
  
  try {
    await orderStore.placeOrder(
      userStore.user.uid, 
      cartStore.items, 
      cartStore.totalPrice
    );
    cartStore.clearCart();
    alert('Siparişiniz başarıyla alındı!');
    router.push('/');
  } catch (e: any) {
    alert('Hata: ' + e.message);
  }
}
</script>

<style scoped>
.cart-page {
  padding: 40px 0;
  min-height: 80vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.page-title {
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 24px;
}

.empty-cart {
  text-align: center;
  padding: 60px 0;
  background: white;
  border-radius: 16px;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.btn-start {
  display: inline-block;
  margin-top: 16px;
  padding: 12px 32px;
  background: #003b7a;
  color: white;
  text-decoration: none;
  border-radius: 999px;
  font-weight: 600;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 24px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cart-sidebar {
  align-self: start;
}

.summary-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e6ecfb;
}

.summary-card h3 {
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: #6b7280;
  font-size: 14px;
}

.summary-row.highlight {
  color: #28a745;
}

.divider {
  height: 1px;
  background: #e5e7eb;
  margin: 16px 0;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 24px;
  color: #111827;
}

.total-amount {
  color: #0b2a7a;
}

.btn-checkout {
  width: 100%;
  padding: 14px;
  background: #ffc900;
  color: #000;
  border: none;
  border-radius: 999px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-checkout:hover {
  background: #e6b400;
}

@media (max-width: 900px) {
  .cart-content {
    grid-template-columns: 1fr;
  }
}
</style>

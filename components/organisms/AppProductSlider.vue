<template>
  <div class="page-products">
    <div v-if="loading" class="loading">Yükleniyor...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <MoleculesProductSliderRow 
      v-else 
      title="Sana Özel Ürünler" 
      :products="products" 
      @addToCart="handleAddToCart"
    />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/products'
import { useCartStore } from '~/stores/cart'

const productStore = useProductStore()
const cartStore = useCartStore()

const loading = computed(() => productStore.loading)
const error = computed(() => productStore.error)
const products = computed(() => productStore.products)

onMounted(() => {
  productStore.fetchProducts()
})

function handleAddToCart(product: any) {
  cartStore.addToCart(product)
  // Optional: show toast notification
  alert(`${product.name || product.title} sepete eklendi!`)
}
</script>

<style scoped>
.page-products{
  padding: 0 18px 18px;
  max-width: 1300px;
  margin: 0 auto;
}

.loading, .error {
  padding: 2rem;
  text-align: center;
  color: #6b7280;
}

.error {
  color: #ef4444;
}
</style>

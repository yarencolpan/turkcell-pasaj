<template>
  <div class="admin-products">
    <h1>Ürün Yönetimi</h1>
    
    <form @submit.prevent="handleAddProduct" class="add-form">
      <div class="form-group">
        <label>Ürün Adı:</label>
        <input v-model="newProduct.name" required />
      </div>
      <div class="form-group">
        <label>Fiyat:</label>
        <input v-model.number="newProduct.price" type="number" required />
      </div>
      <div class="form-group">
        <label>Açıklama:</label>
        <textarea v-model="newProduct.description"></textarea>
      </div>
      
      <button type="submit" :disabled="productStore.loading">Ürün Ekle</button>
    </form>

    <div class="product-list">
      <h2>Mevcut Ürünler</h2>
      <div v-if="productStore.loading">Yükleniyor...</div>
      
      <table v-else class="table">
        <thead>
          <tr>
            <th>Ürün Adı</th>
            <th>Fiyat</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productStore.products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }} TL</td>
            <td>
              <button @click="handleDelete(product.id)" class="btn-delete">Sil</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
});

const productStore = useProductStore();
const newProduct = reactive({
  name: '',
  price: 0,
  description: '',
  imageUrl: '',
  stock: 100
});

async function handleAddProduct() {
  try {
    await productStore.addProduct({ ...newProduct });
    alert('Ürün eklendi!');
    // Reset form
    newProduct.name = '';
    newProduct.price = 0;
    newProduct.description = '';
  } catch (e: any) {
    alert('Hata: ' + e.message);
  }
}

async function handleDelete(id: string) {
  if (!confirm('Bu ürünü silmek istediğinize emin misiniz?')) return;
  
  try {
    await productStore.deleteProduct(id);
    alert('Ürün silindi!');
  } catch (e: any) {
    alert('Hata: ' + e.message);
  }
}

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<style scoped>
.admin-products {
  max-width: 600px;
  margin: 0 auto;
}

.add-form {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
}

button {
  background: #333;
  color: white;
  padding: 0.5rem 2rem;
  border: none;
  cursor: pointer;
}

.product-list {
  margin-top: 3rem;
  border-top: 1px solid #ccc;
  padding-top: 2rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.table th, .table td {
  text-align: left;
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
}

.btn-delete {
  background: #ef4444;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
}
</style>

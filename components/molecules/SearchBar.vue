<template>
  <div class="search-bar">
    <input
      v-model="keyword"
      type="text"
      placeholder="Ürün, marka veya kategori ara"
    />
    <button class="search-button">Ara</button>
  </div>
</template>

<script setup lang="ts">
const keyword = ref('')
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  flex: 1;
}

.search-bar input {
  flex: 1;
  padding: 12px 16px;
  border-radius: 999px 0 0 999px;
  border: 1px solid #d4d4d4;
  font-size: 14px;
}

.search-button {
  padding: 12px 20px;
  border-radius: 0 999px 999px 0;
  border: 1px solid #003366;
  background-color: #003366;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
}
</style>

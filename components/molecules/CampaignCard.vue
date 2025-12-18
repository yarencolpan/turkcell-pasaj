<template>
  <div class="card">
    <img class="img" :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
}>()
</script>

<style scoped>
.card{
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
}

.img{
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}
</style>

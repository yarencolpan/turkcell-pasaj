<template>
  <button class="btn" type="button" aria-label="Geri" @click="$emit('click')">
    ←
  </button>
</template>

<script setup>
defineEmits(["click"]);
</script>

<style scoped>
.btn{
  width: 40px; height: 40px;
  border-radius: 12px;
  border: none;
  background: transparent;
  font-size: 26px;
  cursor: pointer;
  color:#111827;
}
</style>

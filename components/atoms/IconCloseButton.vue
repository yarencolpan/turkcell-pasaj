<template>
  <button class="btn" type="button" aria-label="Kaldır" @click="$emit('click')">×</button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>

<style scoped>
.btn{
  width: 28px; height: 28px;
  border-radius: 8px;
  border: 1px solid #e6ecfb;
  background:#fff;
  cursor:pointer;
  font-size: 18px;
  line-height: 1;
  color:#6b7a99;
}
</style>

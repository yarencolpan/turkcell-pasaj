<template>
  <div class="qty">
    <button class="b" type="button" @click="$emit('dec')">−</button>
    <span class="n">{{ value }}</span>
    <button class="b" type="button" @click="$emit('inc')">+</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: number
}>()
defineEmits(['inc', 'dec'])
</script>

<style scoped>
.qty{
  display:flex;
  align-items:center;
  gap: 10px;
  border:1px solid #e6ecfb;
  border-radius: 12px;
  padding: 8px 10px;
  background:#fff;
}
.b{
  width: 26px; height: 26px;
  border-radius: 8px;
  border:1px solid #e6ecfb;
  background:#fff;
  cursor:pointer;
  font-size: 16px;
}
.n{ min-width: 16px; text-align:center; font-weight: 800; }
</style>

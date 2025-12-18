<template>
  <div class="dots" aria-label="Slider göstergeleri">
    <button
      v-for="(_, i) in count"
      :key="i"
      type="button"
      class="dot"
      :class="{ on: i === active }"
      @click="$emit('go', i)"
      :aria-label="`Slayt ${i+1}`"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number
  active: number
}>()
defineEmits(['go'])
</script>

<style scoped>
.dots{
  display:flex;
  justify-content:center;
  gap: 8px;
  margin-top: 10px;
}
.dot{
  width: 22px;
  height: 3px;
  border-radius: 999px;
  border: none;
  background: #dbe4fb;
  cursor: pointer;
}
.dot.on{ background:#2f57d8; }
</style>

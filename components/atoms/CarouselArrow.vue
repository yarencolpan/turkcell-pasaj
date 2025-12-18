<template>
  <button class="arrow" type="button" :class="pos" @click="$emit('click')" :aria-label="label">
    <span>{{ pos === "left" ? "‹" : "›" }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  pos?: 'left' | 'right'
  label?: string
}>()
defineEmits(['click'])
</script>

<style scoped>
.arrow{
  width: 38px; height: 38px;
  border-radius: 999px;
  border: 1px solid #e6ecfb;
  background: #fff;
  cursor: pointer;
  display:flex; align-items:center; justify-content:center;
  box-shadow: 0 8px 18px rgba(0,0,0,.10);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.arrow span{ font-size: 24px; line-height: 1; color:#2b2f38; }

.arrow.left{ left: -18px; }
.arrow.right{ right: -18px; }
</style>

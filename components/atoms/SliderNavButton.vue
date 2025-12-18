<template>
  <button class="btn" type="button" :class="pos" @click="$emit('click')" :aria-label="label">
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
.btn{
  width: 42px; height: 42px;
  border-radius: 999px;
  border: none;
  background: rgba(255,255,255,.95);
  cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  box-shadow: 0 10px 24px rgba(0,0,0,.12);
  position:absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
}
.btn span{ font-size: 22px; color:#2b2f38; line-height:1; }

.btn.left{ left: -18px; }
.btn.right{ right: -18px; }
</style>

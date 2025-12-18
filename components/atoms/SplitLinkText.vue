<template>
  <span class="text">
    <span class="left">{{ left }}</span>
    <span class="right">{{ right }}</span>
  </span>
</template>

<script setup>
defineProps({
  left: { type: String, required: true },
  right: { type: String, required: true },
});
</script>

<style scoped>
.text{
  font-size: 14px;
  font-weight: 700;
}
.left{
  color:#1e2230;
}
.right{
  color:#2f57d8;
  margin-left: 6px;
}
</style>

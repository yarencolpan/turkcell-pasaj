<template>
  <a
    class="social-icon"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  label: string
}>()
</script>

<style scoped>
.social-icon{
  width: 40px;
  height: 40px;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
}

/* SLOT'tan gelen svg */
.social-icon :deep(svg){
  width: 28px;
  height: 28px;
  display: block;
  stroke: currentColor;
}
</style>

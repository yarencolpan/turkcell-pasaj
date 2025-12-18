<template>
  <div class="page-slider" v-if="slides && slides.length > 0">
    <MoleculesHeroCarousel :slides="slides" :autoplay="true" :intervalMs="3500" />
  </div>
</template>

<script setup lang="ts">
import { useContentStore } from '~/stores/content';

const contentStore = useContentStore();

// Fetch on mount if empty
onMounted(() => {
    if (contentStore.banners.length === 0) {
        contentStore.fetchBanners();
    }
});

const slides = computed(() => contentStore.banners);
</script>

<style scoped>
.page-slider{
  padding: 18px;
  max-width: 1280px; 
  margin: 0 auto;
}
</style>

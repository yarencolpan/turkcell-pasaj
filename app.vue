<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

onMounted(() => {
  if (import.meta.client) {
    userStore.initAuth();
  }
});
</script>

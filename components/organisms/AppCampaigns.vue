<template>
  <div class="page-campaigns">
    <div class="top">
      <h2 class="h2">Kampanyalar</h2>
      <AtomsPillButton>Tümü</AtomsPillButton>
    </div>

    <div class="grid" v-if="campaigns && campaigns.length > 0">
      <MoleculesCampaignCard v-for="c in campaigns" :key="c.id" :src="c.src" :alt="c.alt" />
    </div>
    <div v-else style="text-align:center; padding: 20px;">Yükleniyor...</div>
  </div>
</template>

<script setup lang="ts">
import { useContentStore } from '~/stores/content';

const contentStore = useContentStore();

onMounted(() => {
    if (contentStore.campaigns.length === 0) {
        contentStore.fetchCampaigns();
    }
});

const campaigns = computed(() => contentStore.campaigns);
</script>

<style scoped>
.page-campaigns{
  padding: 26px 18px 40px;
  max-width: 1300px;
  margin: 0 auto;
  background:#fff;
}

.top{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom: 18px;
}

.h2{
  margin: 0;
  font-size: 34px;
  font-weight: 500;
  color:#111827;
}

.grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.grid :deep(.card){
  height: 270px;
}

@media (max-width: 980px){
  .grid{ grid-template-columns: 1fr; }
  .grid :deep(.card){ height: 210px; }
}
</style>

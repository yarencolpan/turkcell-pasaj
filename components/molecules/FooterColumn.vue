<template>
  <div class="footer-col">
    <AtomsFooterHeading>{{ title }}</AtomsFooterHeading>
    <ul>
      <AtomsFooterLink v-for="(item, index) in items" :key="index">
        {{ item }}
      </AtomsFooterLink>
    </ul>

    <a v-if="showMore" class="see-all">Tümünü Gör ▾</a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  items: string[]
  showMore?: boolean
}>()
</script>

<style scoped>
.footer-col {
  width: 170px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.see-all {
  display: inline-block;
  margin-top: 6px;
  color: #c8d4e2;
  cursor: pointer;
  font-size: 13px;
}
</style>

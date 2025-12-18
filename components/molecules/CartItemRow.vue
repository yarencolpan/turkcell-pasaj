<template>
  <div class="row">
    <img class="img" :src="image" :alt="title" />

    <div class="info">
      <div class="title">{{ title }}</div>
      <div class="sub">{{ color }}</div>
    </div>

    <div class="unit">
      <div class="h">Birim Fiyatı</div>
      <AtomsPriceText>{{ formattedUnitPrice }} TL</AtomsPriceText>
    </div>

    <div class="qtyCol">
      <div class="h">Adet</div>
      <AtomsQtyControl :value="qty" @inc="$emit('inc')" @dec="$emit('dec')" />
    </div>

    <div class="total">
      <AtomsIconCloseButton @click="$emit('remove')" />
      <div class="h">Tutar</div>
      <AtomsPriceText>{{ formattedTotalPrice }} TL</AtomsPriceText>
    </div>

    <div class="bottom">
      <span>Satıcı: <b>{{ seller }}</b></span>
      <span class="dot">•</span>
      <span>{{ shipping }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  title: string
  color?: string
  unitPrice: number
  qty: number
  totalPrice: number
  seller?: string
  shipping?: string
}>()

defineEmits(['inc', 'dec', 'remove'])

const formattedUnitPrice = computed(() => props.unitPrice.toLocaleString('tr-TR'))
const formattedTotalPrice = computed(() => props.totalPrice.toLocaleString('tr-TR'))
</script>

<style scoped>
.row{
  position: relative;
  border:1px solid #e6ecfb;
  border-radius: 14px;
  padding: 16px;
  background:#fff;
  display:grid;
  grid-template-columns: 70px 1fr 140px 150px 120px;
  gap: 14px;
  align-items: start;
}
.img{
  width: 70px; height: 70px;
  object-fit: contain;
  border-radius: 10px;
}
.info .title{ font-weight: 900; line-height: 1.2; }
.sub{ color:#6b7a99; font-size: 12px; margin-top: 4px; }

.h{ font-size: 11px; color:#6b7a99; margin-bottom: 6px; }

.unit, .qtyCol{ align-self:start; }

.total{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap: 6px;
}

.bottom{
  grid-column: 1 / -1;
  display:flex;
  justify-content:flex-end;
  gap: 10px;
  font-size: 12px;
  color:#6b7a99;
  margin-top: 4px;
}
.dot{ opacity:.6; }

@media (max-width: 980px){
  .row{ grid-template-columns: 70px 1fr; }
  .unit, .qtyCol, .total{ grid-column: 1 / -1; align-items:flex-start; }
  .total{ align-items:flex-start; }
  .bottom{ justify-content:flex-start; }
}
</style>

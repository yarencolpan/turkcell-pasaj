<template>
  <div class="card" @click="$emit('click')">
    <div class="imgBox">
      <img :src="image" :alt="title" />
    </div>

    <div class="body">
      <div class="title">{{ title }}</div>

      <div v-if="oldPrice && discountText" class="discountRow">
        <span class="old">{{ oldPrice }}</span>
        <span class="disc">{{ discountText }}</span>
      </div>

      <div class="priceRow">
        <span class="price">{{ formattedPrice }}</span>
        <span class="tl">TL</span>
      </div>
      
      <button class="add-btn" @click.stop="$emit('addToCart')">Sepete Ekle</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  title: string
  price: number | string
  oldPrice?: string
  discountText?: string
}>()

defineEmits(['click', 'addToCart'])

const formattedPrice = computed(() => {
  if (typeof props.price === 'number') {
    return props.price.toLocaleString('tr-TR')
  }
  return props.price
})
</script>

<style scoped>
.card{
  width: 280px;
  min-width: 280px;
  border:1px solid #cfd7e6;
  border-radius: 10px;
  background:#fff;
  overflow:hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.card:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
.imgBox{
  height: 220px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 14px;
  background:#fff;
}
.imgBox img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  display:block;
}
.body{ padding: 14px 14px 16px; }

.title{
  font-size: 14px;
  line-height: 1.25;
  color:#111827;
  min-height: 36px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.discountRow{
  display:flex;
  align-items:baseline;
  gap: 10px;
  margin-top: 10px;
}
.old{ color:#9aa7bf; text-decoration: line-through; font-size: 14px; }
.disc{ color:#ff3b3b; font-size: 14px; }

.priceRow{
  margin-top: 6px;
  display:flex;
  align-items:baseline;
  gap: 6px;
}
.price{ font-size: 22px; font-weight: 900; color:#0b2a7a; }
.tl{ font-size: 12px; font-weight: 800; color:#0b2a7a; }

.add-btn {
  width: 100%;
  margin-top: 12px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background: #003b7a;
  color: white;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}
.add-btn:hover {
  background: #002856;
}
</style>

<template>
  <div class="wrap">
    <div class="head">
      <h2 class="h2">{{ title }}</h2>
    </div>

    <div class="rail">
      <div class="viewport" ref="vp">
        <div class="track">
          <MoleculesProductCard
            v-for="p in products"
            :key="p.id"
            :image="p.imageUrl || p.image || ''"
            :title="p.name || p.title || ''"
            :price="p.price"
            :oldPrice="p.oldPrice"
            :discountText="p.discountText"
            @addToCart="$emit('addToCart', p)"
          />
        </div>
      </div>

      <AtomsSliderNavButton pos="left" label="Sola kaydır" @click="scroll(-1)" />
      <AtomsSliderNavButton pos="right" label="Sağa kaydır" @click="scroll(1)" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: string | number
  name?: string
  title?: string
  price: number | string
  imageUrl?: string
  image?: string
  oldPrice?: string
  discountText?: string
}

defineProps<{
  title?: string
  products: Product[]
}>()

defineEmits(['addToCart'])

const vp = ref<HTMLElement | null>(null)

function scroll(dir: number) {
  const el = vp.value
  if (!el) return
  el.scrollBy({ left: dir * 600, behavior: 'smooth' })
}
</script>

<style scoped>
.wrap{ padding: 26px 0; }
.head{ margin-bottom: 16px; }
.h2{
  margin: 0;
  font-size: 32px;
  font-weight: 500;
  color:#111827;
}

.rail{ position: relative; }

.viewport{
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 24px;
}
.viewport::-webkit-scrollbar{ height: 10px; }
.viewport::-webkit-scrollbar-thumb{ background:#dbe4fb; border-radius:999px; }
.viewport::-webkit-scrollbar-track{ background:transparent; }

.track{
  display:flex;
  gap: 20px;
}
</style>

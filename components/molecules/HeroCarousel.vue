<template>
  <div class="wrap">
    <div class="frame">
      <div class="slide">
        <img :src="slides[index].src" :alt="slides[index].alt" />
      </div>

      <AtomsCarouselArrow pos="left" label="Önceki" @click="prev" />
      <AtomsCarouselArrow pos="right" label="Sonraki" @click="next" />
    </div>

    <AtomsCarouselDots :count="slides.length" :active="index" @go="go" />
  </div>
</template>

<script setup lang="ts">
interface Slide {
  src: string
  alt: string
}

const props = defineProps<{
  slides: Slide[]
  autoplay?: boolean
  intervalMs?: number
}>()

const index = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function next() {
  index.value = (index.value + 1) % props.slides.length
}
function prev() {
  index.value = (index.value - 1 + props.slides.length) % props.slides.length
}
function go(i: number) {
  index.value = i
}

onMounted(() => {
  if (!props.autoplay || props.slides.length <= 1) return
  timer = setInterval(next, props.intervalMs || 3500)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.wrap{ width: 100%; }

.frame{
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: #fff;
}

.slide{
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16 / 6.5;
  background:#f6f8fd;
}

.slide img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>

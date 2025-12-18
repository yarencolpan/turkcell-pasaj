<template>
  <img
    class="logo"
    :src="src"
    :alt="alt"
    loading="lazy"
  />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default:
      "https://fastlogin.com.tr/fast_static/assets/images/101200_logo_v2.png?v=202409-last",
  },
  alt: { type: String, default: "FastLogin" },
});
</script>

<style scoped>
.logo{
  width: 56px;
  height: 56px;
  object-fit: contain;
  display: block;
}
</style>

<template>
  <button class="eye" type="button" @click="$emit('toggle')" :aria-label="label">
    <svg v-if="hidden" viewBox="0 0 24 24" width="20" height="20">
      <path fill="currentColor" d="M2.1 3.5 3.5 2.1l18.4 18.4-1.4 1.4-3.1-3.1c-1.6.7-3.4 1.2-5.4 1.2C6 20 1.7 12.9 1.1 12c.7-1 3-4.2 6.6-6.3L2.1 3.5Zm7.4 7.4a2.5 2.5 0 0 0 3.6 3.6l-3.6-3.6Zm9.1 5.5-2-2c.9-.7 1.7-1.5 2.4-2.4-.7-1-4-6-8.5-6-1 0-1.9.2-2.7.5L6.3 5.1C7.6 4.4 9 4 10.5 4 18 4 22.3 11.1 22.9 12c-.4.6-1.5 2.2-3.3 3.9Z"/>
    </svg>

    <svg v-else viewBox="0 0 24 24" width="20" height="20">
      <path fill="currentColor" d="M12 5c7 0 10.9 7 11 7-.1 0-4 7-11 7S1.1 12 1 12c.1 0 4-7 11-7Zm0 2C7 7 3.6 11 3.1 12 3.6 13 7 17 12 17s8.4-4 8.9-5c-.5-1-3.9-5-8.9-5Zm0 2.5A2.5 2.5 0 1 1 12 14a2.5 2.5 0 0 1 0-5Z"/>
    </svg>
  </button>
</template>

<script setup>
defineProps({
  hidden: { type: Boolean, default: true },
  label: { type: String, default: "Şifreyi göster/gizle" },
});
defineEmits(["toggle"]);
</script>

<style scoped>
.eye{
  width: 44px;
  height: 56px;
  border: none;
  background: transparent;
  cursor: pointer;
  color:#9aa7bf;
  display:flex;
  align-items:center;
  justify-content:center;
}
</style>

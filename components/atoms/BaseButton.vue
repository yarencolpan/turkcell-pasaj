<template>
  <!-- nativeType: submit/button; block: tam genişlik -->
  <button
    class="base-button"
    :class="[
      `base-button--${type}`,
      { 'base-button--block': block, 'base-button--disabled': disabled }
    ]"
    :type="nativeType"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'primary' | 'secondary'
  nativeType?: 'button' | 'submit'
  block?: boolean
  disabled?: boolean
}>()
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 44px;
  padding: 0 24px;

  border-radius: 999px;
  border: 1px solid transparent;
  cursor: pointer;

  font-weight: 600;
  font-size: 14px;
}

.base-button--block {
  width: 100%;
}

.base-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* primary */
.base-button--primary {
  background-color: #003b7a;
  color: #ffffff;
}

/* secondary */
.base-button--secondary {
  background-color: #f4f7fb;
  color: #003b7a;
  border-color: #e3e8f0;
}
</style>

<template>
  <label class="cb">
    <input
      class="cb__box"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span class="cb__text"><slot /></span>
  </label>
</template>

<script setup>
defineProps({ modelValue: { type: Boolean, default: false } })
defineEmits(['update:modelValue'])
</script>

<style scoped>
.cb {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #2b2f38;
}

.cb__box {
  width: 18px;
  height: 18px;
  accent-color: #2f57d8;
}
</style>

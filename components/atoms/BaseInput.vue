<template>
  <div class="base-input-wrapper">
    <label v-if="label" class="base-input-label">{{ label }}</label>
    <input
      class="base-input"
      :type="type"
      :placeholder="placeholder"
      v-model="model"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: String,
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  }
});
</script>

<style scoped>
.base-input-wrapper{
  display:flex;
  flex-direction:column;
  gap: 6px;
  margin-bottom: 0;
}

.base-input-label{
  font-size: 12px;
  color:#a6b1c6;
  margin-left: 2px;
}

.base-input{
  width: 100%;
  height: 56px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid #cfd7e6;
  font-size: 14px;
  outline: none;
  background: #fff;
  box-sizing: border-box;
}

.base-input::placeholder{
  color:#a6b1c6;
}

.base-input:focus{
  border-color:#2f57d8;
  box-shadow: 0 0 0 3px rgba(47,87,216,.12);
}
</style>

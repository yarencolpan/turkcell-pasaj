<template>
  <div class="wrap">
    <input
      class="inp"
      :type="hidden ? 'password' : 'text'"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      autocomplete="new-password"
    />
    <AtomsEyeToggleIcon :hidden="hidden" @toggle="hidden = !hidden" />
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  modelValue: { type: String, default: "" },
  placeholder: { type: String, default: "Şifre" },
});
defineEmits(["update:modelValue"]);

const hidden = ref(true);
</script>

<style scoped>
.wrap{
  display: flex;
  align-items: center;
  height: 56px;
  border: 1px solid #cfd7e6;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
}

.inp{
  flex: 1;
  height: 100%;
  border: none !important;
  outline: none;
  padding: 0 16px;
  font-size: 14px;
  background: transparent !important;
  box-shadow: none !important;
  appearance: none;
  -webkit-appearance: none;
}

.inp::placeholder{
  color:#a6b1c6;
}

</style>

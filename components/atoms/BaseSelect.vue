<template>
  <select class="sel" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option value="" disabled>{{ placeholder }}</option>
    <slot />
  </select>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: "" },
  placeholder: { type: String, default: "Seçiniz" }
});
defineEmits(["update:modelValue"]);
</script>

<style scoped>
.sel{
  width:100%;
  height:56px;
  border-radius:12px;
  border:1px solid #cfd7e6;
  background:#fff;
  padding:0 16px;
  outline:none;
  font-size:14px;
  color:#111827;
}

</style>

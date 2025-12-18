<template>
  <div class="field">
    <div class="prefix" aria-hidden="true">
      <span class="flag">🇹🇷</span>
      <span class="code">+90</span>
    </div>

    <input
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      inputmode="numeric"
      autocomplete="tel"
      placeholder="Cep Telefon Numarası"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: "" },
});
defineEmits(["update:modelValue"]);
</script>

<style scoped>
.field{
  display:flex;
  align-items:center;
  background:#fff;
  border:1px solid #d9e3ff;
  border-radius: 12px;
  overflow:hidden;
  height: 44px;
}
.prefix{
  display:flex;
  align-items:center;
  gap: 8px;
  padding: 0 12px;
  background:#f7f9ff;
  border-right:1px solid #e2e9ff;
  height:100%;
}
.flag{ font-size: 16px; }
.code{ font-weight: 700; color:#2a4aa4; }
.input{
  flex:1;
  border:none;
  outline:none;
  padding: 0 12px;
  font-size: 14px;
}
</style>

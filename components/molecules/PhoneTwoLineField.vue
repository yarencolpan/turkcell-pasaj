<template>
  <div class="box">
    <div class="top">
      <span class="flag">🇹🇷</span>
      <span class="label">Cep Telefon Numarası</span>
      <span class="chev">▾</span>
    </div>

    <div class="bottom">
      <span class="code">+90</span>
      <input
        class="inp"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        inputmode="numeric"
        autocomplete="tel"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ modelValue: { type: String, default: "" } });
defineEmits(["update:modelValue"]);
</script>

<style scoped>
.box{
  border: 1px solid #cfd7e6;
  border-radius: 12px;
  background:#fff;
  padding: 12px 16px;
}
.top{
  display:flex;
  align-items:center;
  gap: 10px;
  color:#a6b1c6;
  font-size: 12px;
}
.flag{ font-size: 16px; }
.label{ flex:1; }
.chev{ color:#2f57d8; font-weight: 900; }

.bottom{
  display:flex;
  align-items:center;
  gap: 10px;
  margin-top: 8px;
}
.code{
  color:#7f8aa5;
  font-weight: 700;
}
.inp{
  border:none;
  outline:none;
  flex:1;
  font-size: 14px;
}
</style>

<template>
  <div class="tabs" role="tablist" aria-label="Giriş Yöntemi">
    <button
      class="tab"
      :class="{ active: modelValue === 'phone' }"
      role="tab"
      :aria-selected="modelValue === 'phone'"
      @click="$emit('update:modelValue', 'phone')"
      type="button"
    >
      <span class="icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="currentColor" d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.7 3.9.7.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.6 22 2 13.4 2 3c0-.6.4-1 1-1h3.8c.6 0 1 .4 1 1 0 1.3.2 2.6.7 3.9.1.4 0 .8-.3 1.1L6.6 10.8z"/>
        </svg>
      </span>
      Cep Telefonu
    </button>

    <button
      class="tab"
      :class="{ active: modelValue === 'email' }"
      role="tab"
      :aria-selected="modelValue === 'email'"
      @click="$emit('update:modelValue', 'email')"
      type="button"
    >
      <span class="icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
        </svg>
      </span>
      E-posta Adresi
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: "phone" },
});
defineEmits(["update:modelValue"]);
</script>

<style scoped>
.tabs{
  display:flex;
  gap: 0;
  background:#f3f6ff;
  padding: 6px;
  border-radius: 16px;
  border: 1px solid #e3ebff;
}

.tab{
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;
  gap: 10px;
  border: 1px solid transparent;
  background: transparent;
  color:#6c7fa7;
  padding: 12px 14px;
  border-radius: 14px;
  font-weight: 700;
  cursor:pointer;
}

.tab.active{
  background:#fff;
  border-color:#2f57d8;
  color:#1f3e9a;
  box-shadow: 0 8px 18px rgba(0,0,0,.06);
}

</style>

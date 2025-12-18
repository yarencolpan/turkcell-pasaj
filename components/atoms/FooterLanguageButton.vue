<template>
  <button class="lang-btn"><slot /></button>
</template>

<style scoped>
.lang-btn {
  padding: 6px 12px;
  border: none;
  background: transparent;
  color: #c8d4e2;
  cursor: pointer;
}
.lang-btn.active {
  color: white;
  font-weight: bold;
}
</style>

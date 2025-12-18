<template>
  <button class="pill" type="button"><slot /></button>
</template>

<style scoped>
.pill{
  height: 36px;
  padding: 0 18px;
  border-radius: 999px;
  border: none;
  background: #eef2f8;
  color:#0b2a7a;
  font-weight: 800;
  cursor:pointer;
}
</style>

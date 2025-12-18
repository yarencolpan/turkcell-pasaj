<template>
  <div class="badge" aria-label="App Logo">
    <div class="inner">
      <AtomsAppLogo class="img" />
    </div>
  </div>
</template>

<style scoped>
.badge{
  width: 52px; height: 52px;
  border-radius: 14px;
  background: #0b2a7a;
  display:flex; align-items:center; justify-content:center;
  box-shadow: 0 8px 18px rgba(0,0,0,.12);
}
.inner{
  width: 34px; height: 34px;
  border-radius: 12px;
  background: #ffcc00;
  display:flex; align-items:center; justify-content:center;
  overflow: hidden;
}
.img{
  width: 26px;
  height: 26px;
}
</style>

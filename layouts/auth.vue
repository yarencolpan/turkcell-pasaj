<template>
  <div class="auth-layout">
    <div class="auth-container">
      <NuxtLink to="/" class="back-home">&larr; Ana Sayfaya Dön</NuxtLink>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0; /* Match the grayish bg of the app logic pages */
}

.auth-container {
  /* Removed card styles to avoid double-boxing */
  width: 100%;
  display: flex;
  justify-content: center;
}

.back-home {
  display: none; /* Hide back link if not needed or style it differently, user didn't ask but it might look weird floating */
}
</style>

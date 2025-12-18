<template>
  <div class="main-layout">
    <OrganismsAppHeader />
    <main>
      <slot />
    </main>
    <OrganismsAppFooter />
  </div>
</template>

<style>
/* Global reset or minimal styles for layout */
body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background-color: #f4f7fb; /* Light gray background like Pasaj */
}

.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>

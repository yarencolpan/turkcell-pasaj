<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <div class="logo">
        <NuxtLink to="/">Pasaj Admin</NuxtLink>
      </div>
      <nav class="menu">
        <NuxtLink to="/admin/products" class="menu-item">Ürün Yönetimi</NuxtLink>
        <NuxtLink to="/" class="menu-item">Siteye Dön</NuxtLink>
      </nav>
    </aside>
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background: #111827;
  color: white;
  padding: 20px;
}

.logo a {
  color: #ffc900;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  display: block;
  margin-bottom: 40px;
}

.menu-item {
  display: block;
  color: #d1d5db;
  text-decoration: none;
  padding: 10px 0;
  border-bottom: 1px solid #374151;
}

.menu-item:hover {
  color: white;
}

.content {
  flex: 1;
  padding: 40px;
  background: #f3f4f6;
}
</style>

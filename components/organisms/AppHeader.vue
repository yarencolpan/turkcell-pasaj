<template>
  <header class="header">
    <!-- ÜST SATIR -->
    <div class="header-top">
      <div class="top-left">
        <!-- Turkcell mini ikon (SVG) -->
        <svg
          class="top-icon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M13.6217 4.45506C13.126 3.68365 12.5254 3.05203 11.8234 2.56107C11.1215 2.0702 10.3181 1.7201 9.4172 1.51163C7.93856 1.16967 6.50063 1.32411 5.11422 1.93614C4.34811 2.27441 3.6701 2.74092 3.08669 3.33394C2.35774 4.07498 1.83126 4.9143 1.5103 5.85131C1.50735 5.85994 1.50479 5.86828 1.50204 5.87692C1.49083 5.9099 1.4808 5.94337 1.47018 5.97664C1.14106 7.06023 1.44865 7.65877 1.93245 7.15753C1.95142 7.1358 1.97109 7.11475 1.99017 7.09331C1.99754 7.08458 2.00472 7.07672 2.01219 7.0675C2.57801 6.36565 3.47825 5.78059 3.47825 5.78059L3.47874 5.78107C3.70786 5.62353 3.94612 5.47618 4.19372 5.3393C4.47673 5.17574 4.77261 5.02557 5.04844 4.92449C5.04844 4.92449 5.30509 4.80876 5.37343 4.45671C5.37471 4.45021 5.37599 4.44371 5.37736 4.43721C5.37795 4.43372 5.37884 4.43052 5.37943 4.42693C5.42535 4.13387 5.74366 3.32831 6.6442 3.27534C6.92651 3.23712 7.20617 3.28669 7.45328 3.40252C7.88752 3.60624 8.22068 4.01387 8.28813 4.5056C8.34173 4.89635 8.24733 5.2646 8.04486 5.55611C8.03404 5.5727 8.02155 5.58948 8.00798 5.60646C8.00405 5.6116 8.00012 5.61684 7.99608 5.62198C7.82695 5.83763 7.59528 6.00458 7.31925 6.09858C7.15376 6.15921 6.98571 6.18977 6.82444 6.19404C6.82405 6.19414 6.82375 6.19423 6.82375 6.19423C6.72257 6.20713 6.61047 6.19414 6.49807 6.16678C6.37122 6.14136 6.25479 6.09936 6.15489 6.04397C5.98094 5.96355 5.83973 5.87275 5.78791 5.8256C5.7468 5.78815 5.70255 5.76778 5.65968 5.75779C5.56439 5.74227 5.48671 5.76012 5.43007 5.78427L5.4284 5.78515C5.39693 5.79883 5.37235 5.81425 5.35485 5.82696C5.1393 6.00429 4.93427 6.19026 4.73977 6.38495C4.22903 6.91442 3.80039 7.51578 3.5992 7.81282C3.4928 7.98103 3.39142 8.15342 3.29594 8.33065C3.20754 8.49479 3.12553 8.66087 3.04912 8.82869C2.92984 9.09411 2.81715 9.37961 2.71607 9.68644C2.71154 9.70051 2.70672 9.71448 2.7023 9.72845C2.6961 9.74795 2.69001 9.76735 2.68401 9.78665C2.67801 9.80576 2.67241 9.82497 2.6666 9.84418C2.0472 11.9374 3.1623 13.1461 4.09706 11.8834C4.1481 11.8034 4.20021 11.7242 4.25351 11.6456C4.254 11.6448 4.25449 11.644 4.25508 11.6432C5.23449 9.97078 7.24403 8.76389 7.24403 8.76389L7.24501 8.7636C7.36793 8.68648 7.49222 8.61227 7.61789 8.54068L7.61838 8.54C7.61838 8.54 7.62704 8.53524 7.64189 8.52719C7.98615 8.3324 8.34035 8.15827 8.70497 8.00567C9.02898 7.86346 9.37344 7.73046 9.6591 7.66197C9.6591 7.66197 9.99383 7.57612 10.0837 7.16985C10.1483 6.87843 10.362 6.45189 10.846 6.22266C10.9598 6.16532 11.0786 6.12225 11.1989 6.09596C11.329 6.06754 11.4585 6.05726 11.5853 6.06288H11.586C11.6684 6.06152 11.7378 6.07074 11.7968 6.08781C12.4109 6.20471 12.9138 6.70159 12.9868 7.35659C13.0754 8.15099 12.516 8.86798 11.7156 8.96703C11.3167 9.0165 10.9553 8.93046 10.6472 8.70016C10.3013 8.55785 10.0353 8.64913 9.93974 8.69337C9.63796 8.85586 9.34876 9.0359 9.07175 9.23351C8.55659 9.61097 8.14732 10.0045 7.98497 10.167C7.6292 10.5312 7.31404 10.9175 7.04068 11.3265C7.02612 11.3487 7.01157 11.3708 6.99692 11.3938C6.99308 11.3996 6.98944 11.4056 6.98561 11.4115C6.70437 11.854 6.40495 12.4203 6.15833 13.1054C6.13984 13.1587 6.12106 13.2118 6.10366 13.2657C5.84012 14.1448 6.41124 14.4949 7.07165 14.6221C7.17647 14.6349 7.28169 14.6455 7.3875 14.653C7.41346 14.6547 7.43902 14.662 7.46479 14.6667H8.33465C8.37831 14.6631 8.41734 14.6593 8.45078 14.6558C8.63899 14.6331 8.82759 14.6132 9.01433 14.5819C10.3003 14.3657 11.4372 13.8362 12.408 12.9755C13.6301 11.8919 14.3664 10.5419 14.5951 8.93831C14.8243 7.33234 14.5029 5.82667 13.6217 4.45506Z"
          />
        </svg>

        <span>turkcell.com.tr</span>
      </div>

      <nav class="top-menu">
        <a href="#">Kampanyalar</a>
        <a href="#">Markalar</a>
        <a href="#">Favorilerim</a>
        <a href="#">Sipariş Sorgulama</a>
        <a href="#">Yardım</a>
        <a href="#">Pasaj Blog</a>
      </nav>
    </div>

    <!-- ORTA SATIR: LOGO + SEARCH + BUTONLAR -->
    <div class="header-middle">
      <div class="logo-area">
        <NuxtLink to="/">
          <img
            src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/PasajRedesign/logo/PasajHeaderLogo.svg"
            alt="Pasaj"
            class="logo-img"
          />
        </NuxtLink>
      </div>

      <MoleculesSearchBar />

      <div class="actions">
        <!-- GİRİŞ YAP / HESABIM -->
        <div class="user-menu-container" style="position: relative;">
          <AtomsBaseButton 
            type="secondary" 
            @click="toggleDropdown"
          >
            <div class="btn-inner">
              <!-- Kullanıcı ikonu -->
              <svg
                class="btn-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
              <path
                d="M4.66 2.279c-1.088.129-2 .913-2.308 1.981l-.092.32v14.84l.092.32a2.797 2.797 0 0 0 1.908 1.908l.32.092h14.84l.32-.092a2.797 2.797 0 0 0 1.908-1.908l.092-.32V4.58l-.092-.32a2.822 2.822 0 0 0-1.888-1.907l-.3-.092-7.28-.005c-4.004-.004-7.388.007-7.52.023m14.794 1.562c.29.109.596.415.705.705.08.215.081.28.081 7.454 0 7.174-.001 7.239-.081 7.454-.171.457-.655.786-1.157.786h-.235l-.026-.39c-.085-1.273-.501-2.264-1.3-3.106-.692-.729-1.561-1.203-2.583-1.411-.324-.066-.598-.073-2.858-.073-2.26 0-2.534.007-2.858.073-.941.191-1.737.598-2.398 1.226-.913.867-1.394 1.933-1.485 3.291l-.026.39h-.235c-.503 0-.986-.329-1.157-.787-.081-.217-.082-.256-.071-7.526l.01-7.307.087-.162c.157-.293.484-.573.773-.661.055-.016 3.362-.032 7.348-.034 7.19-.003 7.251-.002 7.466.078M11.74 6.266c-1.325.119-2.413.819-3.021 1.946A3.483 3.483 0 0 0 8.271 10c0 .682.129 1.197.45 1.792a3.518 3.518 0 0 0 1.491 1.489 3.483 3.483 0 0 0 1.788.448c.68 0 1.197-.129 1.788-.448a3.518 3.518 0 0 0 1.491-1.489c.321-.595.45-1.11.45-1.792 0-.68-.129-1.197-.448-1.788a3.674 3.674 0 0 0-2.066-1.749c-.422-.147-1.066-.233-1.475-.197m.838 1.555c.371.097.696.291 1.003.598.46.46.659.937.659 1.581 0 .644-.199 1.121-.659 1.581-.46.46-.937.659-1.581.659-.644 0-1.121-.199-1.581-.659-.46-.46-.659-.937-.659-1.581 0-.644.199-1.121.659-1.581.3-.301.631-.5.985-.596.288-.077.881-.078 1.174-.002m2.081 9c1.471.304 2.581 1.644 2.581 3.117v.302H6.76v-.302c0-1.263.837-2.474 2.041-2.955.531-.212.595-.216 3.171-.22 1.996-.002 2.44.007 2.687.058"
              />
            </svg>

            <span v-if="userStore.user">{{ userStore.user.displayName || 'Hesabım' }}</span>
            <span v-else>Giriş Yap</span>

            <!-- aşağı ok ikonu -->
            <svg
              class="dropdown-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7 9l5 5 5-5"
                fill="none"
                stroke="#003b7a"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </AtomsBaseButton>

        <!-- Dropdown Menu -->
        <div v-if="userStore.user && showDropdown" class="dropdown-menu">
          <div v-if="userStore.user.role === 'admin'" class="menu-item" @click.stop="navigateTo('/admin/products')">Yönetici Paneli</div>
          <div class="menu-item" @click.stop="handleLogout">Çıkış Yap</div>
        </div>
      </div>

        <!-- SEPETİM -->
        <AtomsBaseButton @click="navigateTo('/sepet')">
          <div class="btn-inner">
            <svg
              class="btn-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M10.68 2.264c-.987.111-1.791.639-2.213 1.451-.075.146-.411.997-.746 1.891l-.609 1.627-2.146.017c-1.864.015-2.177.026-2.383.085-.946.271-1.43 1.046-1.306 2.095.057.478.255 1.318.358 1.519.101.195.324.403.625.582.517.308.518.31.899 2.478.174.996.373 2.171.442 2.611.341 2.199.711 3.148 1.554 3.981.268.266.426.383.707.528 1.063.548 1.868.63 6.138.63 4.268 0 5.071-.082 6.14-.631.618-.318 1.214-.984 1.557-1.74.303-.667.477-1.358.705-2.79.339-2.136.759-4.414.843-4.578.115-.222.217-.324.495-.489.301-.179.524-.387.625-.582.103-.201.301-1.041.358-1.519.124-1.049-.36-1.824-1.306-2.095-.206-.059-.519-.07-2.383-.085l-2.146-.017-.609-1.627c-.659-1.76-.789-2.049-1.073-2.377-.359-.417-.953-.784-1.466-.909-.192-.046-2.731-.093-3.06-.056m2.971 1.614c.233.119.449.329.559.542.068.132 1.07 2.76 1.07 2.806 0 .008-1.476.014-3.28.014-1.804 0-3.28-.006-3.28-.014 0-.048 1.003-2.675 1.071-2.806.148-.284.44-.528.735-.615.079-.024.703-.037 1.534-.032 1.398.007 1.4.007 1.591.105M6.52 8.787c0 .015-.173.487-.384 1.05-.343.915-.382 1.045-.367 1.23a.686.686 0 0 0 .409.594c.234.117.385.123.602.024.305-.14.341-.208.865-1.606l.494-1.319h7.721l.475 1.27c.261.698.509 1.327.551 1.397.09.148.43.333.614.333.185 0 .506-.178.617-.342a.76.76 0 0 0 .114-.351c.015-.185-.024-.315-.367-1.23a34.84 34.84 0 0 1-.384-1.051c0-.016.808-.023 1.796-.017 2.134.013 1.989-.022 1.95.471-.032.389-.162.924-.239.978-.712.501-1.036.895-1.243 1.514-.068.202-.614 3.252-.825 4.608-.286 1.838-.523 2.55-1.035 3.107-.361.393-.864.605-1.704.719-.581.078-7.779.078-8.36 0-.84-.114-1.343-.326-1.704-.719-.512-.557-.748-1.267-1.035-3.107-.211-1.352-.759-4.411-.826-4.611-.206-.616-.531-1.011-1.242-1.511-.075-.052-.205-.581-.239-.967-.027-.307.002-.387.165-.453.096-.039 3.581-.05 3.581-.011m3.285 2.493c-.391.092-.633.519-.524.924.059.218.288.453.5.511.22.062 4.218.062 4.438 0a.84.84 0 0 0 .306-.191.739.739 0 0 0-.348-1.246c-.192-.044-4.183-.043-4.372.002"
              ></path>
            </svg>

            <span>Sepetim</span>
            <span class="cart-count">{{ cartStore.totalItems }}</span>
          </div>
        </AtomsBaseButton>
      </div>
    </div>

    <!-- ALT KATEGORİ MENÜSÜ -->
    <div class="header-bottom">
      <a href="#">Cep Telefonu-Aksesuar</a>
      <span>•</span>
      <a href="#">Bilgisayar-Tablet</a>
      <span>•</span>
      <a href="#">Elektrikli Ev Aletleri</a>
      <span>•</span>
      <a href="#">Sağlık-Kişisel Bakım</a>
      <span>•</span>
      <a href="#">Hobi-Oyun</a>
      <span>•</span>
      <a href="#">TV-Ses Sistemleri</a>
      <span>•</span>
      <a href="#">Ev-Yaşam</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { useUserStore } from '~/stores/user'

const cartStore = useCartStore()
const userStore = useUserStore()

const showDropdown = ref(false)

function toggleDropdown() {
  if (userStore.user) {
    showDropdown.value = !showDropdown.value
  } else {
    navigateTo('/login')
  }
}

async function handleLogout() {
  await userStore.logout()
  showDropdown.value = false
  navigateTo('/')
}
</script>

<style scoped>
.header {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* ÜST SATIR */
.header-top {
  padding: 8px 80px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #6b7280;
}

.top-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.top-icon {
  width: 18px;
  height: 18px;
}

/* Üst menü linkleri */
.top-menu {
  display: flex;
  gap: 20px;
}

.top-menu a {
  text-decoration: none;
  color: #6b7280;
}

.top-menu a:hover {
  color: #111827;
}

/* ORTA SATIR */
.header-middle {
  padding: 10px 80px 16px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo-area {
  min-width: 130px;
}

.logo-img {
  height: 38px;
}

/* SearchBar ortayı doldursun */
.header-middle > :nth-child(2) {
  flex: 1;
}

.actions {
  display: flex;
  gap: 12px;
  white-space: nowrap;
}

/* BUTON İÇİ */
.btn-inner {
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.cart-count {
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  padding-left: 8px;
}

/* ALT SATIR */
.header-bottom {
  border-top: 1px solid #f3f4f6;
  padding: 10px 80px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 14px;
  color: #4b5563;
}

.header-bottom a {
  text-decoration: none;
  color: #4b5563;
}

.header-bottom span {
  color: #d1d5db;
}

@media (max-width: 1024px) {
  .header-top, .header-middle, .header-bottom {
    padding-left: 16px;
    padding-right: 16px;
  }
  .top-menu { display: none; }
  .header-bottom { overflow-x: auto; white-space: nowrap; }
}

/* Dropdown Menu Styles */
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  min-width: 160px;
  z-index: 50;
  margin-top: 5px;
  overflow: hidden;
}

.menu-item {
  padding: 10px 16px;
  color: #374151;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
  display: block;
  text-decoration: none;
}

.menu-item:hover {
  background-color: #f3f4f6;
  color: #111827;
}
</style>

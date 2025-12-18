<template>
  <footer class="footer">

    <!-- =====================
         1. ÜST BLOK (FULL WIDTH)
         ===================== -->
    <section class="pf-top">
      <div class="pf-top__inner">

        <!-- SOL -->
        <div class="pf-follow">
          <h3 class="pf-follow__title">Bizi Takip Edin</h3>
          <p class="pf-follow__desc">
            Sosyal medya hesaplarımızdan bizi takip edin, fırsatları kaçırmayın.
          </p>
          <img
            class="pf-logo"
            src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/PasajRedesign/logo/PasajFooterLogo.svg"
            alt="Pasaj"
          />  
          <div class="pf-social">
            <MoleculesFooterSocialGroup />
          </div>
        </div>

        <!-- SAĞ -->
        <div class="pf-qr">
          <h3 class="pf-qr__title">Turkcell Uygulamasını İndir</h3>
          <MoleculesFooterQRBox />
        </div>

      </div>
    </section>

    <!-- =====================
         2. ALT BLOKLAR (1200px)
         ===================== -->
    <div class="footer-container">

      <section class="footer-middle">
        <MoleculesFooterColumn title="Hakkımızda" :items="aboutList" :showMore="true" />
        <MoleculesFooterColumn title="Popüler Kategoriler" :items="popularCategories" :showMore="true" />
        <MoleculesFooterColumn title="Yardım" :items="helpList" :showMore="true" />
        <MoleculesFooterColumn title="Popüler Marka Kategoriler" :items="popularBrandCategories" :showMore="true" />
        <MoleculesFooterColumn title="Markalar" :items="brandsList" :showMore="true" />
        <MoleculesFooterColumn title="Özel Günler & Kampanyalar" :items="specialDaysList" :showMore="true" />
        <MoleculesFooterColumn title="Popüler Ürünler" :items="popularProducts" :showMore="true" />
      </section>

      <section class="footer-language">
        <AtomsFooterLanguageButton class="active">Türkçe</AtomsFooterLanguageButton>
        <AtomsFooterLanguageButton>English</AtomsFooterLanguageButton>
        <AtomsFooterLanguageButton>العربية</AtomsFooterLanguageButton>
        <AtomsFooterLanguageButton>русский</AtomsFooterLanguageButton>
      </section>

      <section class="footer-logos">
        <a class="footer-logo-link" href="#" aria-label="Fizy">
          <img src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/fizy-logo.png" alt="Fizy" />
        </a>
        <a class="footer-logo-link" href="#" aria-label="Turkcell Superonline">
          <img src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/sol-yeni-logo.png" alt="Turkcell Superonline" />
        </a>
        <a class="footer-logo-link" href="#" aria-label="Platinum">
          <img src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/platinum-logo.png" alt="Platinum" />
        </a>
        <a class="footer-logo-link" href="#" aria-label="BiP">
          <img src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/bip-logo.png" alt="BiP" />
        </a>
        <a class="footer-logo-link" href="#" aria-label="TV+">
          <img src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/tv-plus-logo-yeni.png" alt="TV+" />
        </a>
        <a class="footer-logo-link" href="#" aria-label="Lifebox">
          <img src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/lifebox-logo-v2.png" alt="Lifebox" />
        </a>
        <a class="footer-logo-link" href="#" aria-label="Paycell">
          <img src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/paycell_logo2.png" alt="Paycell" />
        </a>
        <a class="footer-logo-link" href="#" aria-label="GNC">
          <img src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/gnc-logo.png" alt="GNC" />
        </a>
        <a class="footer-logo-link" href="#" aria-label="Game+">
          <img src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/logo_gaming.png" alt="Game+" />
        </a>
        <a class="footer-logo-link" href="#" aria-label="Global Bilgi">
          <img src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Global-Bilgi-Logo.png" alt="Global Bilgi" />
        </a>
      </section>

      <section class="footer-bottom-bar">
        <span>Gizlilik ve Güvenlik</span>
        <span>© 2025 Turkcell</span>
      </section>

    </div>
  </footer>
</template>

<script setup lang="ts">
const aboutList = [
  'Pasaj Genel Bakış',
  'Haberler & Duyurular',
  'Kurumsal İletişim ve Sürdürülebilirlik',
  'Kariyer',
  'Gizlilik ve Güvenlik',
  'Pasaj İletişim',
  'Pasaj Blog',
  'Pasaj Gaming',
  'Akıllı Ev',
  '5G'
]

const popularCategories = [
  'Cep Telefonu',
  'Android Telefonlar',
  'iPhone Modelleri',
  'İkinci El / Yenilenmiş Telefonlar',
  'Yenilenmiş iPhone',
  '5G Uyumlu Telefonlar',
  'Akıllı Saatler',
  'Bluetooth Kulaklıklar',
  'Tabletler',
  'Laptop'
]

const helpList = [
  'Yardım Merkezi',
  'İşlem Rehberi',
  'Ürün Güvenliği Temas Noktası',
  'Pasaj Sipariş Sorgulama',
  'Nasıl İade Edebilirim?',
  'iPhone Karşılaştırma',
  'Televizyon (TV) Karşılaştırma',
  'Telefon Sat'
]

const popularBrandCategories = [
  'Samsung Telefonlar',
  'JBL Kulaklık',
  'Philips Kahve Makinesi',
  'Samsung Tablet',
  'Dyson Saç Düzleştirici',
  'Philips Dikey Süpürge',
  'Philips Süpürge',
  'Karaca Kahve Makinesi',
  'Philips Airfryer',
  'Apple Kulaklık'
]

const brandsList = [
  'Apple',
  'Samsung',
  'Dyson',
  'Anker',
  'Arzum',
  'Beko',
  'Bosch',
  'Braun',
  'Casper',
  'Delonghi'
]

const specialDaysList = [
  'Ramazan Tarifleri & Ramazan Kampanyaları',
  'Düğün ve Çeyiz Paketleri',
  'Fırsatlar Pasajı',
  'Pasaj Günleri',
  'Uykusuz Kalanlar Kulübü',
  'Vergisiz Telefonlar',
  'Sevgililer Günü Hediyeleri',
  'Vergisiz Bilgisayarlar',
  'Karne Hediyeleri',
  'Kurban Bayramı Kampanyası'
]

const popularProducts = [
  'iPhone 17',
  'iPhone 16',
  'iPhone Air',
  'iPhone 16 Pro Max',
  'iPhone 17 Pro Max',
  'iPhone 16E',
  'iPhone 15',
  'iPhone 15 Plus',
  'iPhone 15 Pro',
  'iPhone 15 Pro Max'
]
</script>

<style scoped>
/* Full width arka plan + genel dikey padding */
/* ALT KISIM (kolonlar + dil + logolar + en alt bar) = daha koyu */
.footer {
  background: #013563; /* koyu */
  color: #fff;
  font-family: system-ui, -apple-system, sans-serif;
}

/* ÜST KISIM (Follow + QR) = daha açık */
.pf-top {
  width: 100%;
  background: #0f4470; /* açık ton (fark burada) */
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* ALT BLOKLAR 1200px */
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 20px;
}

.pf-top__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 34px 24px;
  display: flex;
  justify-content: space-between;
  gap: 48px;
}

/* Sol blok */
.pf-follow {
  flex: 1;
  min-width: 360px;
}

.pf-logo {
  flex: 0 0 auto;           /* büyümesin, daralmasın */
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px; 
  margin-bottom: 2rem;
}

.pf-follow__title {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}

.pf-follow__desc {
  margin: 0 0 18px 0;
  font-size: 14px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.9);
  max-width: 460px;
}

.pf-social {
  display: flex;
  gap: 18px;
  align-items: center;
}

/* Sağ blok */
.pf-qr {
  flex: 1;
  max-width: 520px;
  text-align: left;
}

.pf-qr__title {
  margin: 0 0 14px 0;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  text-align: left; /* orijinalde başlık üstte ortalı gibi */
}

/* Responsive */
@media (max-width: 900px) {
  .pf-top__inner {
    flex-direction: column;
    gap: 28px;
  }
}

/* 2. blok */
.footer-middle {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 36px 0 24px;
  flex-wrap: wrap;
}

/* 3. blok: dil + logolar + alt bar */
.footer-language {
  display: flex;
  gap: 10px;
  border-top: 1px solid #ffffff33;
  padding-top: 14px;
  margin-top: 10px;
}

.footer-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;
  padding: 20px 0;
  flex-wrap: wrap;
}

.footer-logo-link {
  display: inline-flex;
  align-items: center;
}

.footer-logo-link img {
  height: 32px;
  width: auto;
  display: block;
}

.footer-bottom-bar {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #c8d4e2;
  margin-top: 18px;
  border-top: 1px solid #ffffff22;
  padding-top: 10px;
}
</style>

# Firestore Veritabanı Kurulum Rehberi

Bu doküman, Turkcell Pasaj projesi için gerekli Firestore koleksiyonlarını ve örnek verileri açıklar.

---

## 🔥 Firebase Console'a Erişim

1. [Firebase Console](https://console.firebase.google.com/) adresine gidin
2. Projenizi seçin (veya yeni proje oluşturun)
3. Sol menüden **Firestore Database** seçin
4. **Create Database** tıklayın (ilk kez ise)
5. **Start in test mode** seçin (geliştirme için)

---

## 📦 Koleksiyonlar

Projede **4 ana koleksiyon** kullanılmaktadır:

### 1. `products` - Ürünler

| Alan | Tip | Açıklama |
|------|-----|----------|
| `name` | string | Ürün adı |
| `price` | number | Fiyat (TL) |
| `description` | string | Ürün açıklaması |
| `imageUrl` | string | Ürün görseli URL |
| `stock` | number | Stok miktarı |
| `category` | string | Kategori (opsiyonel) |
| `oldPrice` | number | Eski fiyat - indirim varsa (opsiyonel) |
| `discountText` | string | İndirim yazısı (opsiyonel) |

**Örnek Veri:**
```json
{
  "name": "iPhone 15 Pro Max 256GB",
  "price": 84999,
  "description": "Apple iPhone 15 Pro Max, Titanium kasa, A17 Pro çip",
  "imageUrl": "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00TJR1/20255131620-00TJR1-1.png",
  "stock": 50,
  "category": "Cep Telefonu",
  "oldPrice": 89999,
  "discountText": "5000 TL İndirim"
}
```

---

### 2. `users` - Kullanıcılar

| Alan | Tip | Açıklama |
|------|-----|----------|
| `uid` | string | Firebase Auth user ID |
| `email` | string | E-posta adresi |
| `displayName` | string | Kullanıcı adı |
| `role` | string | Rol: "admin" veya "customer" |
| `createdAt` | timestamp | Kayıt tarihi |

**Örnek Veri:**
```json
{
  "uid": "abc123xyz",
  "email": "admin@turkcell.com",
  "displayName": "Admin Kullanıcı",
  "role": "admin",
  "createdAt": "2025-12-16T10:00:00Z"
}
```

---

### 3. `orders` - Siparişler

| Alan | Tip | Açıklama |
|------|-----|----------|
| `userId` | string | Sipariş veren kullanıcı ID |
| `items` | array | Sepet ürünleri listesi |
| `totalAmount` | number | Toplam tutar |
| `status` | string | "pending", "completed", "cancelled" |
| `createdAt` | timestamp | Sipariş tarihi |

**Örnek Veri:**
```json
{
  "userId": "abc123xyz",
  "items": [
    {
      "id": "product1",
      "name": "iPhone 15 Pro Max",
      "price": 84999,
      "quantity": 1
    }
  ],
  "totalAmount": 84999,
  "status": "pending",
  "createdAt": "2025-12-16T12:00:00Z"
}
```

---

### 4. `campaigns` - Kampanyalar

| Alan | Tip | Açıklama |
|------|-----|----------|
| `title` | string | Kampanya başlığı |
| `imageUrl` | string | Banner görseli |
| `link` | string | Yönlendirme linki |
| `isActive` | boolean | Aktif mi? |
| `order` | number | Sıralama |

**Örnek Veri:**
```json
{
  "title": "Yeni Yıl Fırsatları",
  "imageUrl": "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kampanya/yatay/36-TAKSIT-DoAlt.jpg",
  "link": "/kampanyalar/yeni-yil",
  "isActive": true,
  "order": 1
}
```

---

## 🚀 Firebase Emulator ile Yerel Geliştirme

Projeniz Firebase Emulator kullanacak şekilde ayarlı. Emulator'ı başlatmak için:

```bash
# Firebase Emulator'ı (Veriler silinmeden) başlat
npm run emulators
```

Emulator çalıştığında:
- **Firestore**: http://localhost:8080
- **Auth**: http://localhost:9099
- **Emulator UI**: http://localhost:4000

---

## 📝 Firestore'a Veri Ekleme Yöntemleri

### Yöntem 1: Firebase Console (Web Arayüzü)

1. [Firebase Console](https://console.firebase.google.com/) → Projeniz → Firestore Database
2. **Start collection** tıklayın
3. Collection ID: `products` yazın
4. **Auto-ID** ile belge oluşturun
5. Alanları ekleyin

### Yöntem 2: Emulator UI

1. http://localhost:4000 adresine gidin
2. **Firestore** sekmesini açın
3. **+ Start collection** tıklayın
4. Verileri manuel ekleyin

### Yöntem 3: Admin Panel (Projede mevcut)

1. http://localhost:3000/admin/products adresine gidin
2. Formu doldurup ürün ekleyin
3. Veriler otomatik Firestore'a kaydedilir

### Yöntem 4: Seed Script (Toplu Veri Ekleme)

Aşağıdaki script ile örnek veriler ekleyebilirsiniz:

```javascript
// Terminal'de: node seed-data.js

const admin = require('firebase-admin');

// Service account dosyanızı indirin
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Örnek ürünler
const products = [
  {
    name: "iPhone 15 Pro Max 256GB",
    price: 84999,
    description: "Apple iPhone 15 Pro Max",
    imageUrl: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00TJR1/20255131620-00TJR1-1.png",
    stock: 50,
    category: "Cep Telefonu"
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    price: 74999,
    description: "Samsung Galaxy S24 Ultra 256GB",
    imageUrl: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00SLNZ/2024117118-00SLNZ-1.png",
    stock: 30,
    category: "Cep Telefonu"
  },
  {
    name: "MacBook Pro 14 M3",
    price: 94999,
    description: "Apple MacBook Pro 14 inç M3 Pro",
    imageUrl: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00QZ3R/202411271648-00QZ3R-1.png",
    stock: 20,
    category: "Bilgisayar"
  },
  {
    name: "Sony WH-1000XM5",
    price: 12999,
    description: "Sony WH-1000XM5 Kablosuz Kulaklık",
    imageUrl: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00ER4H/00ER4H-1.png",
    stock: 100,
    category: "Kulaklık"
  }
];

async function seedData() {
  for (const product of products) {
    await db.collection('products').add(product);
    console.log(`Added: ${product.name}`);
  }
  console.log('Seeding complete!');
}

seedData();
```

---

## 🔒 Firestore Security Rules

`firestore.rules` dosyanızda güvenlik kuralları:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Ürünler - herkes okuyabilir, sadece admin yazabilir
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null && 
                   get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Siparişler - sadece kendi siparişlerini görebilir
    match /orders/{orderId} {
      allow read, write: if request.auth != null && 
                         request.auth.uid == resource.data.userId;
    }
    
    // Kullanıcılar - sadece kendi profilini görebilir
    match /users/{userId} {
      allow read, write: if request.auth != null && 
                         request.auth.uid == userId;
    }
    
    // Kampanyalar - herkes okuyabilir
    match /campaigns/{campaignId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## ✅ Hızlı Başlangıç Checklist

- [ ] Firebase Console'da proje oluştur
- [ ] Firestore Database aktifleştir
- [ ] `products` koleksiyonu oluştur
- [ ] En az 4-5 ürün ekle
- [ ] `campaigns` koleksiyonu oluştur (opsiyonel)
- [ ] Firebase Emulator'ı başlat: `firebase emulators:start`
- [ ] Uygulamayı başlat: `npm run dev`
- [ ] http://localhost:3000 adresinde ürünleri gör!

---

## 🖼️ Örnek Ürün Görselleri (Kullanıma Hazır URL'ler)

```
iPhone 15 Pro Max:
https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00TJR1/20255131620-00TJR1-1.png

Samsung Galaxy S24:
https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00SLNZ/2024117118-00SLNZ-1.png

MacBook Pro:
https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00QZ3R/202411271648-00QZ3R-1.png

Sony Kulaklık:
https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00ER4H/00ER4H-1.png

Logitech Mouse:
https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00U57Y/2025981259-00U57Y-1.png

Razer Klavye:
https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00MW33/2024322156-00MW33-1.png
```

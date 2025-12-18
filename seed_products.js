
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "demo-api-key",
    authDomain: "demo-turkcell-pasaj.firebaseapp.com",
    projectId: "demo-turkcell-pasaj",
    storageBucket: "demo-turkcell-pasaj.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
connectFirestoreEmulator(db, 'localhost', 8081);

const dummyProducts = [
    {
        name: "iPhone 13 128 GB",
        price: 35000,
        oldPrice: "38.000 TL",
        discountText: "%8 İndirim",
        imageUrl: "https://cdn.dsmcdn.com/ty984/product/media/images/20230526/10/367352865/56360670/1/1_org_zoom.jpg",
        description: "Harika bir telefon"
    },
    {
        name: "Samsung Galaxy S24 Ultra",
        price: 74999,
        imageUrl: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00SLNZ/2024117118-00SLNZ-1.png",
        description: "Güçlü android deneyimi"
    },
    {
        name: "Dyson V15 Detect",
        price: 24000,
        oldPrice: "27.000 TL",
        discountText: "Büyük Fırsat",
        imageUrl: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00U57Y/2025981259-00U57Y-1.png", // Using mouse image as placeholder or find better if possible, but user just wants 'fetched from firebase'
        description: "Derinlemesine temizlik"
    },
    {
        name: "Sony WH-1000XM5",
        price: 12999,
        description: "Sony WH-1000XM5 Kablosuz Kulaklık",
        imageUrl: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00ER4H/00ER4H-1.png",
        stock: 100
    }
];

const dummyBanners = [
    { alt: "Yeni Yıl Jenerik 2", src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/yilbasi-stil-hero-banner-web.jpg?1765680661719" },
    { alt: "Günün Hediye Fırsatları", src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/Gunun-Hediye-Firsatlari-2025-hero-banner-web.jpg?1765680661719" },
    { alt: "Apple Watch Yılbaşı", src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/watchyb-new-hero-web.jpg?1765680661719" },
    { alt: "Pasaj Limitine Faizsiz 6 Taksit", src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/Pasaj_6-Taksit-hero-banner-web.jpg?1765680661719" },
    { alt: "350 TL Hediye Çeki", src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/yilbasi-ilk-alisveris-hero-banner-web.jpg?1765680661719" },
    { alt: "Ayın Yıldızı Aralık", src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/ay1225-new-hero-web.jpg?1765680661719" },
];

const dummyCampaigns = [
    {
        alt: "Kampanyalar - 1",
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kampanya/yatay/r1-enpara65k-DO-Alt.jpg?1765680661719",
    },
    {
        alt: "Kampanyalar - 2",
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kampanya/yatay/SBS-Aksesuar-DoAlt.jpg?1765680661719",
    },
    {
        alt: "Kampanyalar - 3",
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kampanya/yatay/casper1125-Doalt.jpg?1765680661719",
    },
    {
        alt: "Kampanyalar - 4",
        src: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kampanya/yatay/36-TAKSIT-DoAlt.jpg?1765680661719",
    },
];

async function seed() {
    console.log("Adding dummy data to Emulator...");
    try {
        // Products
        const prodCol = collection(db, 'products');
        for (const p of dummyProducts) {
            await addDoc(prodCol, p);
            console.log(`Added Product: ${p.name}`);
        }

        // Banners
        const bnrsCol = collection(db, 'banners');
        for (const b of dummyBanners) {
            await addDoc(bnrsCol, b);
            console.log(`Added Banner: ${b.alt}`);
        }

        // Campaigns
        const cmpCol = collection(db, 'campaigns');
        for (const c of dummyCampaigns) {
            await addDoc(cmpCol, c);
            console.log(`Added Campaign: ${c.alt}`);
        }

        console.log("Done! Check your website.");
        process.exit(0);
    } catch (e) {
        console.error("Error adding products:", e);
        process.exit(1);
    }
}

seed();

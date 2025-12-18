
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator, collection, getDocs } from "firebase/firestore";

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

async function check() {
    console.log("Checking products...");
    try {
        const snapshot = await getDocs(collection(db, 'products'));
        console.log(`Found ${snapshot.size} products.`);
        snapshot.forEach(doc => {
            console.log(doc.id, doc.data());
        });
    } catch (e) {
        console.error("Error:", e);
    }
}

check();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb2Sn0zGVMy_KQV11Fq2KOBjaIqSAGTvc",
  authDomain: "smartmedia-8b535.firebaseapp.com",
  projectId: "smartmedia-8b535",
  storageBucket: "smartmedia-8b535.appspot.com",
  messagingSenderId: "797805526738",
  appId: "1:797805526738:web:65bc7a315417122f4af70b",
  measurementId: "G-D7DGW9XZGB"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Export db and storage
export { db, storage };
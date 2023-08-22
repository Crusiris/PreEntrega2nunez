// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9d6Zh7KS7nNR-80kpw_srvTrZmoOdgA8",
  authDomain: "ecommerce-8e484.firebaseapp.com",
  projectId: "ecommerce-8e484",
  storageBucket: "ecommerce-8e484.appspot.com",
  messagingSenderId: "933939880952",
  appId: "1:933939880952:web:1a97fce5588623a8e86c0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

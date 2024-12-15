// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "olx-clone-787b6.firebaseapp.com",
  projectId: "olx-clone-787b6",
  storageBucket: "olx-clone-787b6.appspot.com",
  messagingSenderId: "742129922098",
  appId: "1:742129922098:web:b1ff6a51cd618f3bd64c2b",
  measurementId: "G-F0XXP6CNND"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
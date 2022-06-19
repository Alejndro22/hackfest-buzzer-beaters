import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "impulso-buzzer-beaters.firebaseapp.com",
  projectId: "impulso-buzzer-beaters",
  storageBucket: "impulso-buzzer-beaters.appspot.com",
  messagingSenderId: "296210513315",
  appId: "1:296210513315:web:7bd86f59987e173187ae16",
  measurementId: "G-GGBQX81B9Q",
};

// Iniciar Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

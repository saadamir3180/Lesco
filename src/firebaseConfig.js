// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCmJqK5ycqzrq2dlJ7nsnUgjpdhs9xW3Ic",
  authDomain: "lesco3180.firebaseapp.com",
  projectId: "lesco3180",
  storageBucket: "lesco3180.appspot.com",
  messagingSenderId: "697965781444",
  appId: "1:697965781444:web:38d21c96a240d309ab4491",
  measurementId: "G-C2KFJJ2RKH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const dataBase = getFirestore(app)
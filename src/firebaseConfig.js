// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmJqK5ycqzrq2dlJ7nsnUgjpdhs9xW3Ic",
  authDomain: "lesco3180.firebaseapp.com",
  projectId: "lesco3180",
  storageBucket: "lesco3180.appspot.com",
  messagingSenderId: "697965781444",
  appId: "1:697965781444:web:38d21c96a240d309ab4491",
  measurementId: "G-C2KFJJ2RKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const dataBase = getFirestore(app)
// const analytics = getAnalytics(app);
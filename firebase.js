// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGieTkofpr6dMGinKq3NJMLfKrybNI9QE",
  authDomain: "instagram-clone-7fdce.firebaseapp.com",
  projectId: "instagram-clone-7fdce",
  storageBucket: "instagram-clone-7fdce.appspot.com",
  messagingSenderId: "587703429515",
  appId: "1:587703429515:web:a004d7268d853209c0e78e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

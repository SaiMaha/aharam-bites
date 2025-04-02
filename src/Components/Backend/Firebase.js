// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBUMgkihohY1j8inHrFJT6S2VBwEvUHR0",
  authDomain: "aharambites.firebaseapp.com",
  projectId: "aharambites",
  storageBucket: "aharambites.firebasestorage.app",
  messagingSenderId: "829573986972",
  appId: "1:829573986972:web:3b83ff4c7c5fa41f2e0b59"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export let __AUTH=getAuth(firebaseapp)
export let __DB=getFirestore(firebaseapp)
export default firebaseapp;
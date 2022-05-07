
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmut0pfJriZPVOeofhf9dUgdGeXkxP63Q",
    authDomain: "smart-hiring.firebaseapp.com",
    projectId: "smart-hiring",
    storageBucket: "smart-hiring.appspot.com",
    messagingSenderId: "803074135969",
    appId: "1:803074135969:web:109ad9a2219b41f4461de0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, db };

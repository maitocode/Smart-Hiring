import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfCgBSD2za-CZKNJx1AL4msh2jSTZ_9R8",
  authDomain: "iresource-local.firebaseapp.com",
  projectId: "iresource-local",
  storageBucket: "iresource-local.appspot.com",
  messagingSenderId: "338857511975",
  appId: "1:338857511975:web:92aad071dae083cf55d202",
  measurementId: "G-2ZRVYDB243"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, db };

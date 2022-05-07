
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCmut0pfJriZPVOeofhf9dUgdGeXkxP63Q",
    authDomain: "smart-hiring.firebaseapp.com",
    projectId: "smart-hiring",
    storageBucket: "smart-hiring.appspot.com",
    messagingSenderId: "803074135969",
    appId: "1:803074135969:web:109ad9a2219b41f4461de0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const createFirebaseAccount = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            console.log(error.message);
        });
}
const database = getDatabase(app);

export { app, auth, createFirebaseAccount, database };

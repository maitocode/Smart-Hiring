
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AUTO_PASSWORD_USER = "12345678";

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
const database = getFirestore();

// custom method

const createChatAccount = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            return user;
        })
        .catch((error) => {
            console.log(error.message);
        });
}

const signInWithEmailAndAutoPassword = (email) => {
    signInWithEmailAndPassword(auth, email, AUTO_PASSWORD_USER)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            return user;
        })
        .catch((error) => {
            console.log("Error", error);
            return createChatAccount(email, AUTO_PASSWORD_USER);
        })
}

const signInWithEmailAndPasswordCustom = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            console.log("error", error);
            return createChatAccount()
        })
}

const signOutChat = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.log(error);
    }
}

const colRef = collection(database, "message")

const sendMessage = (message) => {
    addDoc(colRef, {
        title: message,
        author: "me"
    })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
}

const getMessages = () => {
    getDocs(colRef)
        .then((snapshot) => {
            snapshot.docs.map(doc => console.log(doc.data()))
        })
        .catch(error => {
            console.log(error);
        })
}

export { app, auth, database, signInWithEmailAndAutoPassword, signOutChat, colRef, sendMessage, getMessages }
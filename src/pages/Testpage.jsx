import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Testpage() {

const auth = getAuth();

createUserWithEmailAndPassword(auth, "hihdi@yopmail.com", "1234567")
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        console.log(error.message);
    });

  // const db = database;

  // set(ref(db, 'users/' + 0), {
  //   username: "hihi",
  //   email: "hihi@hihi.com",
  //   profile_picture : "imageUrl"
  // });
  return <h1>HIHI</h1>;
}

export default Testpage;

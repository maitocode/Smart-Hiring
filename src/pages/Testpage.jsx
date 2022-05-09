import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import {getDocs } from 'firebase/firestore';
import { signInWithEmailAndAutoPassword, colRef, sendMessage, getMessages } from "core/services/Firebase/FirebaseConfig.js";


function Testpage() {

    const [messages, setMessages] = useState([{
        message: 'hihi',
        id: 10000
    }]);

    useEffect(() => {
        signInWithEmailAndAutoPassword("hihihi@yopmail.com");
        // sendMessage("vcl");
        getMessages();
    })

  return <div>
      
  </div>;
}

export default Testpage;

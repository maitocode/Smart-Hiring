import React from "react";
import { auth } from "../core/services/Firebase/FirebaseConfig.js";
function Testpage() {
  const hihi = auth.createUserWithEmailAndPassword(
    "hihi@yopmail.com",
    "123456"
  );
  return <h1>HIHI</h1>;
}

export default Testpage;

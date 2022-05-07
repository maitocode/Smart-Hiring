import React, { useEffect, useState } from "react";
import "./ChatBox.scss";
import ChatEngine from "./ChatEngine/ChatEngine.jsx";

function ChatBox() {

  const [hide, setHide] = useState(true);

  const openChatBox = () => {
    setHide(!hide);
  }

  useEffect(() => {
    console.log(hide);
  })
  
  return (
    <div className="chat-box" onClick={() => openChatBox()}>
      <img src="https://cdn-icons-png.flaticon.com/512/52/52482.png" alt="" />
      <h3>Hi, let ask me any question</h3>
      <ChatEngine isHide={hide}/>
    </div>
  );
}

export default ChatBox;

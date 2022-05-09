import React, { useEffect, useState } from "react";
import "./ChatBox.scss";
import ChatEngine from "./ChatEngine/ChatEngine.jsx";

function ChatBox() {

  const [hide, setHide] = useState(true);

  const openCloseChatBox = () => {
    setHide(!hide);
    const LogoChat = document.getElementById("chat-box-minimize-logo");
    const IntroChat = document.getElementById("chat-box-minimize-intro");
    LogoChat.style.display= hide? "none" : "block";
    IntroChat.style.display= "none";
    console.log("onclick")
  }

  useEffect(() => {
    console.log(hide);
  })
  
  return (
    <div className="chat-box">
      <div className="chat-box-minimize" onClick={() => openCloseChatBox()}>
        <img id="chat-box-minimize-logo" src="https://cdn-icons-png.flaticon.com/512/52/52482.png" alt="" />
        <h3 id="chat-box-minimize-intro">Hi, let ask me any question</h3>
      </div>
      <ChatEngine isHide={hide} onHidden={openCloseChatBox}/>
    </div>
  );
}

export default ChatBox;

import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "./ChatEngine.scss";
import ChatEngineHeader from './ChatEngineHeader/ChatEngineHeader';
import ChatEngineRegisterForm from './ChatEngineRegisterForm/ChatEngineRegisterForm';

function ChatEngine({isHide, onHidden}) {

  const [email, setEmail] = useState(localStorage.getItem("email"));


  useEffect(() => {
    console.log("ChatEngine", isHide);
  }, [isHide])


  return (
    <div 
      className="chat-engine"
      style={{display: isHide ? "none" : "block"}}
    >
      {/* move onClick to ChatEngineHeader */}
        <ChatEngineHeader onHide={onHidden}/>
        {/* {email && <ChatEngineRegisterForm />} */}
        <ChatEngineRegisterForm />
        {/* chatframe */}
    </div>
  )
}

ChatEngine.propTypes = {
  isHide: PropTypes.bool,
  onHidden: PropTypes.func
}

export default ChatEngine;

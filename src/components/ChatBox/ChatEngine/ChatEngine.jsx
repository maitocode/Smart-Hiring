import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import "./ChatEngine.scss";
import ChatEngineHeader from './ChatEngineHeader/ChatEngineHeader';

function ChatEngine({isHide}) {

  useEffect(() => {
  }, [isHide])

  return (
    <div 
      className="chat-engine"
      style={{display: isHide ? "none" : "block"}}
    >
      <ChatEngineHeader />
      di                
    </div>
  )
}

ChatEngine.propTypes = {
  isHide: PropTypes.bool
}

export default ChatEngine

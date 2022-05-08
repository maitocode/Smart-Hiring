import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import "./ChatEngine.scss";
import ChatEngineHeader from './ChatEngineHeader/ChatEngineHeader';

function ChatEngine({isHide, onHidden}) {

  useEffect(() => {
    console.log("ChatEngine", isHide);
  }, [isHide])


  return (
    <div 
      className="chat-engine"
      style={{display: isHide ? "none" : "block"}}
    >
        <div onClick={() => onHidden()}><ChatEngineHeader /></div>
        {/* form  */}
    </div>
  )
}

ChatEngine.propTypes = {
  isHide: PropTypes.bool,
  onHidden: PropTypes.func
}

export default ChatEngine;

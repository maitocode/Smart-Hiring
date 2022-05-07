import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import "./ChatEngine.scss";
import ChatEngineHeader from './ChatEngineHeader/ChatEngineHeader';

function ChatEngine({isHide, onHidden}) {

  useEffect(() => {
    console.log("ChatEngine", isHide);
  }, [isHide])

  const handeOnHiddenCLick = () => {
    console.log("hihi")
  }

  return (
    <div 
      className="chat-engine"
      style={{display: isHide ? "none" : "block"}}
    >
      <span onClick={() => onHidden()}><ChatEngineHeader /></span>
    </div>
  )
}

ChatEngine.propTypes = {
  isHide: PropTypes.bool,
  onHidden: PropTypes.func
}

export default ChatEngine

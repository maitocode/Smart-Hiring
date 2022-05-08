import React from 'react'
import PropTypes from 'prop-types'
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import "./ChatEngineHeader.scss"

function ChatEngineHeader({onHide}) {

  return (
    <div className='chat-engine-header'>
      <div className="chat-engine-header-close-button" onClick={() => onHide()}>
        <DoNotDisturbOnIcon fontSize='large' />
      </div>
      <div className="chat-engine-header-title">Smart-Hiring Chatbox</div>
    </div>
  )
}

ChatEngineHeader.propTypes = {
  onHide: PropTypes.func
}

export default ChatEngineHeader

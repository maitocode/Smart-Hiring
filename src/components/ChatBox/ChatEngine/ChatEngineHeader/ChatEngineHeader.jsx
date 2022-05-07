import React from 'react'
import PropTypes from 'prop-types'
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import "./ChatEngineHeader.scss"

function ChatEngineHeader(props) {
  return (
    <div className='chat-engine-header'><DoNotDisturbOnIcon fontSize='large' className="chat-engine-header-close-button"/></div>
  )
}

ChatEngineHeader.propTypes = {}

export default ChatEngineHeader

import React, { useState } from 'react'
import './PopChat.scoped.css'


export const PopChat = ( props ) => {
  let hide = {
    display: 'none',
  }
  let show = {
    display: 'block'
  }
  let textRef = React.createRef()
  const {messages} = props

  const [chatopen, setChatopen] = useState(false)
  const toggle = e => {
    setChatopen(!chatopen)
  }

const handleSend = e => {
  const get = props.getMessage
  get(textRef.current.value)
}

  return (
    <div id='chatCon'>
      <div class="chat-box" style={chatopen ? show : hide}>
    <div class="header">Chat</div>
    <div class="msg-area">
      
      {
        messages.map((msg, i) => (
          i%2 ? (
          <p class="right"><span>{ msg }</span></p>
          ) : (
            <p class="left"><span>{ msg }</span></p>
          )
        ))
      }

    </div>
    <div class="footer">
      <input type="text"  ref={textRef} />
      <button onClick={handleSend} >Send</button>
    </div>
  </div>
    <div class="pop">
      <p><img onClick={toggle} src="/chat6.png" alt="" /></p>
    </div>
    </div>
  )
}

export default PopChat
import React, { useState } from "react";
import "./PopChat.scoped.css";

export const PopChat = (props) => {
  let hide = {
    display: "none",
  };
  let show = {
    display: "block",
  };
  let textRef = React.createRef();
  const { messages } = props;

  const [chatopen, setChatopen] = useState(false);
  const toggle = (e) => {
    setChatopen(!chatopen);
  };

  const handleSend = (e) => {
    const get = props.getMessage;
    get(textRef.current.value);
  };

  return (
    <div id="chatCon">
      <div className="chat-box" style={chatopen ? show : hide}>
        <div className="header">Chat</div>
        <div className="msg-area">
          {messages.map((msg, i) =>
            i % 2 ? (
              <p className="right">
                <span>{msg}</span>
              </p>
            ) : (
              <p className="left">
                <span>{msg}</span>
              </p>
            )
          )}
        </div>
        <div className="footer">
          <input type="text" ref={textRef} />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
      <div className="pop">
        <p>
          <img onClick={toggle} src="/chat6.png" alt="" />
        </p>
      </div>
    </div>
  );
};

export default PopChat;

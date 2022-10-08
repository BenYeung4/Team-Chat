import React from "react";

function Message() {
  return (
    <div className="message owner">
      {/* displaying the time when messages have been sent/recieved */}
      <div className="messageInfo">
        <img
          src="https://img.icons8.com/stickers/100/000000/pokemon.png"
          alt=""
        />
        <span> just now</span>
      </div>
      {/* user's message */}
      <div className="messageContent">
        <p>First message</p>
        <img
          src="https://img.icons8.com/stickers/100/000000/pokemon.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Message;

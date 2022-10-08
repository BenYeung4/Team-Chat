import React from "react";

function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://img.icons8.com/stickers/100/000000/pokemon.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Pikachu</span>
          <p>displaying mesage on tab</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://img.icons8.com/stickers/100/000000/pokemon.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Pikachu</span>
          <p>displaying second message</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;

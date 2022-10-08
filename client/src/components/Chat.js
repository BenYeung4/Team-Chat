import React from "react";
import Cam from "../img/cam.png";
import Join from "../img/join.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Pikachu username</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Join} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;

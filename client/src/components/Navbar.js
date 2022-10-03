import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo"> Team-Chat</span>
      <div className="user">
        <img
          src="https://img.icons8.com/stickers/100/000000/pokemon.png"
          alt=""
        ></img>
        <span className="username"> User</span>
        <button> Logout</button>
      </div>
    </div>
  );
}

export default Navbar;

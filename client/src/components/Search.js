import React from "react";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search for a user" />
      </div>
      <div className="userChat">
        <img
          src="https://img.icons8.com/stickers/100/000000/pokemon.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Pikachu</span>
        </div>
      </div>
    </div>
  );
}

export default Search;

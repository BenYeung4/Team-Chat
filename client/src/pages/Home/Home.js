import React from "react";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";
// import Chats from "../../components/Chats";
// import Navbar from "../../components/Navbar";
// import Search from "../../components/Search";
// import Input from "../../components/Input";
// import Message from "../../components/Message";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;

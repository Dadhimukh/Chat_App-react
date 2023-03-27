import React from "react";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Dadhi</span>
        <div className="chatIcon">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8353/8353783.png"
            alt="Camera"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/3683/3683218.png"
            alt="Add friend"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/512/512142.png"
            alt="More"
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;

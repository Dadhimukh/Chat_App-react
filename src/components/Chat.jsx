import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcon">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9187/9187613.png"
            alt="Camera"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/9187/9187607.png"
            alt="Add friend"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/8699/8699984.png"
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

import React from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { IoPersonAddSharp } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from "./Messages";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <BsCameraVideoFill />
          <IoPersonAddSharp />
          <FiMoreHorizontal />
        </div>
      </div>
      <Messages />
    </div>
  );
}

export default Chat;

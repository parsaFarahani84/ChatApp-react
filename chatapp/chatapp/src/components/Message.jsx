import React from "react";
import img from "../../src/36.jpg";
import img1 from "../../src/44.jpg";

function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={img1} />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={img} />
      </div>
    </div>
  );
}

export default Message;

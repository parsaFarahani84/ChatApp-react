import React from "react";
import { IoAddCircle } from "react-icons/io5";
import { BsFileBinaryFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

function Input() {
  return (
    <div className="input">
      <IoAddCircle />
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" />
        <lbael htmlFor="file">
          <BsFileBinaryFill />
        </lbael>
        <button>
          <RiSendPlaneFill />
        </button>
      </div>
    </div>
  );
}

export default Input;

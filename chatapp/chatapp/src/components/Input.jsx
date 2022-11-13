import React from "react";
import { IoAddCircle } from "react-icons/io5";
// import { HiOutlinePaperClip } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

function Input() {
  return (
    <div className="input">
      <input type="file" style={{ display: "none" }} id="file" />

      <lbael htmlFor="file">
        <IoAddCircle className="plus" />
      </lbael>
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <button>
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default Input;

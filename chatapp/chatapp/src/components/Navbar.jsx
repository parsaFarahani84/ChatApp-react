import React from "react";
import { BiLogOut } from "react-icons/bi";
import img from "../../src/36.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={img} />
        <span>Parsa</span>
        <button>
          <BiLogOut />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

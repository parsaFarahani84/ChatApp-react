import React from "react";
import { BsFileEarmarkImage } from "react-icons/bs";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="emial" placeholder="emial" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <BsFileEarmarkImage className="logoAvatar" />
            <span>Add an avatar</span>
          </label>
          <button>
            <Link to="/home" className="white">
              Sign up
            </Link>
          </button>
        </form>
        <p>
          {" "}
          <Link to="/LogIn">You do have an account? Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

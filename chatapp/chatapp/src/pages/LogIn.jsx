import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">LogIn</span>
        <form>
          <input type="emial" placeholder="emial" />
          <input type="password" placeholder="password" />
          <button>Sign up</button>
        </form>
        <p>
          <Link to="/">Don't have an account? SignIn</Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;

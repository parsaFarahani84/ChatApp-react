import React from "react";
import { BsFileEarmarkImage } from "react-icons/bs";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

function Register() {
  const handlerSubmit = function (e) {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handlerSubmit}>
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

import React, { useState } from "react";
import { BsFileEarmarkImage } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../Firebase";

function Register() {
  const [err, setError] = useState(false);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (err) {
      setError(true);
    }
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
          {err && <span>Somthing went wrong!</span>}
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

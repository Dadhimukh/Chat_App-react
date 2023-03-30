import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  // useState hook for set the errors, at inititals sate it was flase
  const [err, setErr] = useState(false);

  // Using navigate hook for navigating
  const navigate = useNavigate();

  // handleSubmit after click on Login button
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Login form input details
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      // checking for email and password and if everything is ok then navigate the login page
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      // setiting Error as true
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your Email" />
          <input type="password" placeholder="Password" />
          <button>Login In</button>
          {/* Showing the error */}
          {err && <span>Somthing Went Wrong</span>}
        </form>
        <p>You do not have an account? <Link to="/register">Register</Link> </p>
      </div>
    </div>
  );
};

export default Login;

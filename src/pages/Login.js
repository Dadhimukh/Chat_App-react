import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {
  FacebookRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import "./login.scss";

const Login = () => {
  // useState hook for set the errors, at inititals sate it was flase
  const [err, setErr] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [toggleEye, setToggleEye] = useState(false);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();
  const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(inputs)

  //------------------ user login crediantials---------------------------------
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, inputs.email, inputs.password);

      navigate("/");
    } catch (error) {
      // setiting Error as true
      setErr(true);
    }
  };
  // --------------------------------------------------------------------------

  return (
    <div className="login">
      <form>
        <h1>Chat App</h1>
        <h2>Login</h2>
        <div className="formInput">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="formInput">
          <input
            type={inputType}
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <div className="eyeIcon" onClick={handleToggle}>
            {toggleEye ? <Visibility /> : <VisibilityOff />}
          </div>
        </div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        {/* Showing the error */}
        {err && <span>Somthing Went Wrong</span>}
        <div className="formLink">
          <span>Don't have an account?</span>
          <Link
            to="/register"
            className="formSignup"
            style={{ textDecoration: "none" }}
          >
            <span> Register</span>
          </Link>
        </div>

        <div className="line"></div>
        <div className="media-options">
          <Link to="#" className="facebook" style={{ textDecoration: "none" }}>
            <FacebookRounded className="facebookIcon" />
            <span>Login with Facebook</span>
          </Link>
        </div>
        <div className="media-options">
          <Link
            to="#"
            className="facebook google"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
              alt=""
              className="googleImg"
            />
            <span>Login with Google</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" placeholder="Enter your Email" />
          <input type="password" placeholder="Password" />
          <button>Login In</button>
        </form>
        <p>You do not have an account? Sing Up</p>
      </div>
    </div>
  );
};

export default Login;

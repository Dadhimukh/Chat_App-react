   import React from "react";
   import "../styles/register.scss";

   const Register = () => {
   return (
      <div className="formContainer">
         <div className="formWrapper">
         <span className="logo">Chat App</span>
         <span className="title">Register</span>
         <form action="">
            <input type="text" placeholder="Enter your Name" />
            <input type="email" placeholder="Enter your Email" />
            <input type="password" placeholder="Password" />
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
               <img
               src="https://cdn-icons-png.flaticon.com/32/1057/1057240.png"
               alt=""
               />
               <span>Add an avatar</span>
            </label>
            <button>Sing Up</button>
         </form>
         <p>You do have an account? Login</p>
         </div>
      </div>
   );
   };

   export default Register;

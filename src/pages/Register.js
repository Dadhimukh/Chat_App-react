   import React, { useState } from "react";
   import { createUserWithEmailAndPassword } from "firebase/auth";
   import { auth } from "../firebase";

   import "../styles/style.scss";

   const Register = () => {

      const [err, setErr] = useState(false)
   const handleSubmit = async (e) => {
      e.preventDefault();
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];

      try{

      const res = await createUserWithEmailAndPassword(auth, email, password);
      }catch(err){
         setErr(true)
      }
   };
   return (
      <div className="formContainer">
         <div className="formWrapper">
         <span className="logo">Chat App</span>
         <span className="title">Register</span>
         <form onSubmit={handleSubmit}>
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
            {err && <span>Somthing Went Wrong</span>}
         </form>
         <p>You do have an account? Login</p>
         </div>
      </div>
   );
   };

   export default Register;

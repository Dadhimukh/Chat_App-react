   import React from "react";
   import { createUserWithEmailAndPassword } from "firebase/auth";
   import { auth } from "../firebase";

   import "../styles/style.scss";

   const Register = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target[0].value);
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];

      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
         // Signed in
         const user = userCredential.user;
         console.log(user, "not found");
         // ...
         })
         .catch((error) => {
         // ..
         });
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
         </form>
         <p>You do have an account? Login</p>
         </div>
      </div>
   );
   };

   export default Register;

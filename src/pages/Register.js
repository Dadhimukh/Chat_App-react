   import React, { useState } from "react";
   import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
   import { auth, storage, db } from "../firebase";
   import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
   import { doc, setDoc } from "firebase/firestore";
   import { Link, useNavigate } from "react-router-dom";


   import "../styles/style.scss";

   const Register = () => {
   // useState hook for set the errors, at inititals sate it was flase
   const [err, setErr] = useState(false);

   // Using navigate hook for navigating
   const navigate = useNavigate();

   // handleSubmit after click on singUp button
   const handleSubmit = async (e) => {
      e.preventDefault();
      // Registeration form input details
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];

      try {
         // Authentication details of users for singUp
         const res = await createUserWithEmailAndPassword(auth, email, password);

         const storageRef = ref(storage, displayName);

         const uploadTask = uploadBytesResumable(storageRef, file);

         // Register three observers:
         uploadTask.on(
         (error) => {
            setErr(true);
         },
         () => {
            // storing the URL of users image with name for downloading that images from firebaseStore
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
               await updateProfile(res.user, {
               displayName,
               photoURL: downloadURL,
               });
               // storing the users details in firebase
               await setDoc(doc(db, "users", res.user.uid), {
               uid: res.user.uid,
               displayName,
               email,
               photoURL: downloadURL,
               });
               // storing the userChats in fireabase
               await setDoc(doc(db, "userChats", res.user.uid), {});
               // going Home page after getting successfull singUp operation
               navigate("/")
            });
         }
         );
      } catch (err) {
         // setiting Error as true
         setErr(true);
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
           {/* Showing the error */}
           {err && <span>Somthing Went Wrong</span>}
         </form>
         <p>
           You do have an account? <Link to="/login">Login</Link>
         </p>
       </div>
     </div>
   );
   };

   export default Register;

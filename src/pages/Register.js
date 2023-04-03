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
               navigate("/login");
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












         //    import { FacebookRounded } from "@mui/icons-material";
         // import React, { useState } from "react";
         //    import {
         //    ref,
         //    uploadBytesResumable,
         //    getDownloadURL,
         //    } from "firebase/storage";
         //    import { doc, setDoc } from "firebase/firestore";

         // import { Link, useNavigate } from "react-router-dom";
         // import { auth, storage, db } from "../firebase";
         // import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

         // import FormInput from "../components/formInput/FormatInput";
         // import "./register.scss";
         // const Register = () => {
         //    const [err, setErr] = useState(false);

         // const [inputValues, setInputValues] = useState({
         //    username: "",
         //    email: "",
         //    password: "",
         //    confirmPassword: "",
         // });

         // const navigate = useNavigate();

         // const inputs = [
         //    {
         //       id: 1,
         //       name: "username",
         //       type: "text",
         //       placeholder: "Username",
         //       errorMessage:
         //       "Username should be 3-16 character and should't include any special character",
         //       pattern: "^[A-Za-z0-9]{3,16}$",
         //       required: true,
         //    },
         //    {
         //       id: 2,
         //       name: "email",
         //       type: "email",
         //       placeholder: "Email",
         //       errorMessage: "It should be a valid email address",
         //       required: true,
         //    },
         //    {
         //       id: 3,
         //       name: "password",
         //       type: "text",
         //       placeholder: "Password",
         //       errorMessage:
         //       "Password should be 8-20 characters and include at least 1 letter, 1number , 1 special character",
         //       pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`,
         //       required: true,
         //    },
         //    {
         //       id: 4,
         //       name: "confirmPassword",
         //       type: "text",
         //       placeholder: "Confirm Password",
         //       errorMessage: "Passwords don't match",
         //       pattern: inputValues.password,
         //       required: true,
         //    },
         // ];

         // const handleChange = (e) => {
         //    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
         // };
         // // -----------authentication section------------------
         // const handleSubmit = async (e) => {
         // e.preventDefault();
         // const displayName = inputValues.username;
         // const email = inputValues.email;
         // const password = inputValues.confirmPassword;
         // const file = e.target[0].files[0];

         // try {
         //    const res = await createUserWithEmailAndPassword(
         //    auth,
         //    inputValues.email,
         //    inputValues.password
         //    );
         //    const storageRef = ref(storage, displayName);

         //    const uploadTask = uploadBytesResumable(storageRef, file);

         //    // -----------------------------------------------------------------------
         //    // console.log(inputValues);
         //    // Register three observers:
         //    uploadTask.on(
         //       (error) => {
         //       setErr(true);
         //       },
         //       () => {
         //       // storing the URL of users image with name for downloading that images from firebaseStore
         //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
         //          await updateProfile(res.user, {
         //             displayName,
         //             photoURL: downloadURL,
         //          });
         //          // storing the users details in firebase
         //          await setDoc(doc(db, "users", res.user.uid), {
         //             uid: res.user.uid,
         //             displayName,
         //             email,
         //             photoURL: downloadURL,
         //          });
         //          // storing the userChats in fireabase
         //          await setDoc(doc(db, "userChats", res.user.uid), {});
         //          // going Home page after getting successfull singUp operation
         //          navigate("/login");
         //       });
         //       }
         //    );
         // } catch (err) {
         //    // setiting Error as true
         //    setErr(true);
         // }
         // };

         // return (
         // <div className="register">
         //    <form onClick={handleSubmit}>
         //       <h2>Register</h2>
         //       {inputs.map((input) => (
         //       <FormInput
         //          key={input.id}
         //          {...input}
         //          value={inputValues[input.name]}
         //          onChange={handleChange}
         //       />
         //       ))}
         //       <input style={{ display: "none" }} type="file" id="file" />
         //       <label htmlFor="file">
         //       <img
         //          src="https://cdn-icons-png.flaticon.com/32/1057/1057240.png"
         //          alt=""
         //       />
         //       <span>Add an avatar</span>
         //       </label>

         //       <button>Register</button>

         //       <div className="formLink">
         //       <span>Already have an account?</span>
         //       <Link
         //          to="/login"
         //          className="formSignup"
         //          style={{ textDecoration: "none" }}
         //       >
         //          {" "}
         //          Sign in
         //       </Link>
         //       </div>

         //       <div className="line"></div>
         //       <div className="media-options">
         //       <Link
         //          to="#"
         //          className="facebook"
         //          style={{ textDecoration: "none" }}
         //       >
         //          <FacebookRounded className="facebookIcon" />
         //          <span>Login with Facebook</span>
         //       </Link>
         //       </div>
         //       <div className="media-options">
         //       <Link
         //          to="#"
         //          className="facebook google"
         //          style={{ textDecoration: "none" }}
         //       >
         //          <img src="/assets/google.png " alt="" className="googleImg" />
         //          <span>Login with Google</span>
         //       </Link>
         //       </div>
         //    </form>
         // </div>
         // );
         // };

         // export default Register;


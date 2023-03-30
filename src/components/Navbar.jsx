import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
// getting the currentUser from useContaxt
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
        // showing the currentUser photo
          src={currentUser.photoURL}
          alt=""
        />
        {/* showing the current userName */}
        <span>{currentUser.displayName}</span>
        {/* using Firebase for signOut functionality onClick logout */}
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

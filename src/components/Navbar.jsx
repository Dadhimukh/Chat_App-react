import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
  // getting the currentUser from useContaxt
  const { currentUser } = useContext(AuthContext);
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
        <span className="userName">{currentUser.displayName}</span>
        {/* using Firebase for signOut functionality onClick logout */}
        <button onClick={() => signOut(auth)}>
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/128/4436/4436954.png"
            alt="logout"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

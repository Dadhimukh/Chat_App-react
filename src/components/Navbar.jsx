import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/4759765/pexels-photo-4759765.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>Dadhi</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

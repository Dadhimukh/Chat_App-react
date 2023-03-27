import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="FInd User" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/4759765/pexels-photo-4759765.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Dadhi</span>
        </div>
      </div>
    </div>
  );
};

export default Search;

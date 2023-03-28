import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2908/2908214.png"
          alt="Attach"
        />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6499/6499530.png"
            alt="AddImage"
          />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;

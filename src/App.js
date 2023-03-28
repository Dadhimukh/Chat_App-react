import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />{" "}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

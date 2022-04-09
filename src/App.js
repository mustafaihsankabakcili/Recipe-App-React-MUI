import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Detail from "./pages/detail/Detail";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Recipes from "./pages/recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();

  const loginHandler = (username, password) => {
    if (username.length >= 6 && password.length >= 6) {
      toast.success("Successfully logged in!");
      setIsLoggedIn(true);
      navigate("/Recipe-App-React-MUI/");
      return;
    }

    if (username.length < 6 && password.length < 6) {
      toast.error("Invalid username and password!");
      return;
    }

    if (username.length < 6) {
      toast.error("Invalid username!");
      return;
    }

    if (password.length < 6) {
      toast.error("Invalid password!");
      return;
    }
  };
  const logoutHandler = () => {
    toast.success("Successfully logged out!");
    setIsLoggedIn(false);
  };

  const detailHandler = (detail) => {
    setDetail(detail);
    navigate("/Recipe-App-React-MUI/detail");
  };

  return (
    <div className="App">
      <ToastContainer toastStyle={{ backgroundColor: "#272727" }} />
      <Navbar isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      <Routes>
        <Route
          path="/Recipe-App-React-MUI/"
          element={<Home isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/Recipe-App-React-MUI/recipes"
          element={<Recipes detailHandler={detailHandler} />}
        />
        <Route
          path="/Recipe-App-React-MUI/login"
          element={<Login onLogin={loginHandler} />}
        />
        <Route path="/Recipe-App-React-MUI/about" element={<About />} />
        <Route
          path="/Recipe-App-React-MUI/detail"
          element={<Detail detail={detail} />}
        />
      </Routes>
    </div>
  );
}

export default App;

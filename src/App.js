import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/Home";
import SignUp from "./components/SignUp";
import AddFilament from "./components/AddFilament";
import "./styles/main.css";

let baseUrl = "http://localhost:8000";

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="add_filament" element={<AddFilament />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;

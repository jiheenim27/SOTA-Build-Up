import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SignUp from "../RegisterPage/SignUp";
import LandingPage from "./LandingPage";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
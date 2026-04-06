import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";

const Bai3 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/logout" element={<LogoutComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Bai3;

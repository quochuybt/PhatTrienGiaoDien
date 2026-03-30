import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import DashBoard from "./DashBoard";
import Profile from "./Profile";
import Orders from "./Orders";
import Settings from "./Settings";
import Home from "./Home";

const NestedRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NestedRoutes;

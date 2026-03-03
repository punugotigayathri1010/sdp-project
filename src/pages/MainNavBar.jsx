import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";
import About from "./About";
import AdminLogin from "./AdminLogin";
import UserLogin from "./UserLogin";
import "./mainnavbar.css";

const MainNavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout">

      {/* Top Menu Button */}
      <div className="topbar">
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰ 
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "show" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/registration" onClick={() => setOpen(false)}>Registration</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/admin-login" onClick={() => setOpen(false)}>Admin Login</Link>
        <Link to="/user-login" onClick={() => setOpen(false)}>User Login</Link>
      </div>

      {/* Page Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
        </Routes>
      </div>

    </div>
  );
};

export default MainNavBar;
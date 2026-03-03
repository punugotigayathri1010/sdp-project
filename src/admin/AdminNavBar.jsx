import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import "./admin.css";

import AdminHome from "./AdminHome";
import ViewUsers from "./ViewUsers";
import AdminLogout from "./AdminLogout";

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin/logout");
  };

  return (
    <div className="admin-container">

      {/* NAVBAR */}
      <nav className="admin-navbar">

        {/* Arrow Logout Button - Top Left */}
        <button
          className="arrow-logout"
          onClick={handleLogout}
          title="Logout"
        >
          ←
        </button>

        {/* Center Navigation Links */}
        <div className="nav-center">
          <ul className="navbar-links">
            <li>
              <Link to="/admin/home" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/admin/view-users" className="nav-link">
                View Users
              </Link>
            </li>
          </ul>
        </div>

      </nav>

      {/* PAGE CONTENT */}
      <div className="admin-content">
        <Routes>
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/view-users" element={<ViewUsers />} />
          <Route path="/admin/logout" element={<AdminLogout />} />
        </Routes>
      </div>

    </div>
  );
}
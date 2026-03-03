import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import "./user.css";

import UserHome from "./UserHome";
import AddExpenses from "./AddExpenses";
import ViewExpenses from "./ViewExpenses";
import UserLogout from "./UserLogout";

export default function UserNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/user/logout");
  };

  return (
    <div className="user-container">

      {/* NAVBAR */}
      <nav className="user-navbar">

        {/* Arrow Logout Button (Top Left) */}
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
              <Link to="/user/home" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/user/add-expenses" className="nav-link">
                Add Expense
              </Link>
            </li>
            <li>
              <Link to="/user/view-expenses" className="nav-link">
                View Expenses
              </Link>
            </li>
          </ul>
        </div>

      </nav>

      {/* PAGE CONTENT */}
      <div className="user-content">
        <Routes>
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/add-expenses" element={<AddExpenses />} />
          <Route path="/user/view-expenses" element={<ViewExpenses />} />
          <Route path="/user/logout" element={<UserLogout />} />
        </Routes>
      </div>

    </div>
  );
}
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Registration from './Registration';
import AdminLogin from './AdminLogin';
import UserLogin from './UserLogin';
import About from './About';
import './mainnavbar.css';

const MainNavBar = () => {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          
          <div className="navbar-logo">
            <Link to="/" className="logo-link">
              Expense Tracking & Visualization System
            </Link>
          </div>

          <ul className="nav-menu">
            
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/registration" className="nav-link">
                Registration
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

        
            <li className="nav-item nav-item-dropdown">
              <button className="nav-link dropdown-btn">
                Login Options ▼
              </button>

              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/admin-login" className="dropdown-link">
                    Admin Login
                  </Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/user-login" className="dropdown-link">
                    User Login
                  </Link>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </nav>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path='/about' element={<About />} />
       
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
      </Routes>

    </div>
  );
};

export default MainNavBar;
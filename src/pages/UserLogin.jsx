import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './userlogin.css';

const UserLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registrations =
      JSON.parse(localStorage.getItem('customerRegistrations')) || [];

    const user = registrations.find(
      (reg) =>
        reg.username === formData.username &&
        reg.password === formData.password
    );

    if (user) {
      
      sessionStorage.setItem('isUser', 'true');
      sessionStorage.setItem('userName', user.username);   
      sessionStorage.setItem('fullName', user.fullName);
      sessionStorage.setItem('email', user.email);
      sessionStorage.setItem('userId', user.id);

    
    

      setFormData({ username: '', password: '' });

      navigate('/user/home');
    } else {
      alert('Invalid username or password. Please try again.');
      setFormData({ username: '', password: '' });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>User Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;

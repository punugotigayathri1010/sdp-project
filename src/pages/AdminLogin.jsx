import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminlogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const adminCredentials = JSON.parse(sessionStorage.getItem('adminCredentials'));
    
    
    const defaultUsername = 'klu';
    const defaultPassword = 'klu';
    
    const validUsername = adminCredentials?.username || defaultUsername;
    const validPassword = adminCredentials?.password || defaultPassword;
    

    if (formData.username === validUsername && formData.password === validPassword) {
      sessionStorage.setItem('isAdmin', 'true');
      sessionStorage.setItem('adminUsername', formData.username);
      sessionStorage.setItem('adminName', 'Administrator');
      console.log('Admin Login successful!');
      setFormData({
        username: '',
        password: '',
      });
navigate('/admin/home')
    } else {
      setError('Invalid username or password');
      console.log('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Admin Login</h1>
       
        {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px', padding: '10px', backgroundColor: '#ffe6e6', borderRadius: '4px' }}>{error}</div>}
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

          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
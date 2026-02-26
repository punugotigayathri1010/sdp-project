import React, { useState } from 'react';
import './registration.css';


const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    email: '',
    password: '',
    username: '',
    currency: '',
    language: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingRegistrations =
      JSON.parse(localStorage.getItem('customerRegistrations')) || [];

    const newRegistration = {
      ...formData,
      id: Math.floor(Math.random() * 900000) + 100000,
      registeredAt: new Date().toLocaleString(),
    };

    existingRegistrations.push(newRegistration);

    localStorage.setItem(
      'customerRegistrations',
      JSON.stringify(existingRegistrations)
    );

    console.log('Registration saved:', newRegistration);
    alert('Registration submitted successfully and saved!');

    setFormData({
      fullName: '',
      gender: '',
      email: '',
      password: '',
      username: '',
      
      currency: '',
      language: '',
    });
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h1>User Registration</h1>
        <form onSubmit={handleSubmit} className="registration-form">

          
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          
          <div className="form-group">
            <label htmlFor="email">Email ID </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

      
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

          
         

          {/* Preferred Currency */}
          <div className="form-group">
            <label htmlFor="currency">Preferred Currency </label>
            <select
              id="currency"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              required
            >
              <option value="">Select Currency</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
            </select>
          </div>

          {/* Preferred Language */}
          <div className="form-group">
            <label htmlFor="language">Preferred Language </label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
            >
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Telugu">Telugu</option>
              <option value="Tamil">Tamil</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Registration;

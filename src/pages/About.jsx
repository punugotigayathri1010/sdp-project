import React from 'react';

const About = () => {
  return (
    <div 
      style={{ 
    minHeight: "100vh",
    width: "100%",
    padding: "60px",
    background: "linear-gradient(135deg, #1e3c72, #96afdb)",  
    color: "white",
    textAlign: "center"
  }}
>
      <h1>About Expense Tracking System</h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6", maxWidth: "800px", textAlign: "center", margin: "20px auto" }}>
        The Expense Tracking & Visualization System helps users record, 
        monitor, and analyze their daily income and expenses. 
      </p>

      <p style={{ fontSize: "18px", lineHeight: "1.6", maxWidth: "800px"  , textAlign: "center", margin: "20px auto" }}>
        It provides clear charts and summaries to understand spending 
        patterns and manage budgets effectively.
      </p>

      <ul style={{ fontSize: "18px", lineHeight: "1.6", maxWidth: "800px" , textAlign: "left", margin: "20px auto" }}>
        <li>Add and manage expenses</li>
        <li>Categorize transactions</li>
        <li>View visual reports</li>
        <li>Track monthly budgets</li>
      </ul>
    </div>
  );
};

export default About;
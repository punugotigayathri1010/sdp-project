import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <img 
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
        alt="Expense Tracker"
        style={styles.image}
      />

      <h1 style={styles.heading}>Expense Tracking & Visualization System</h1>
      <p style={styles.text}>
        Track your expenses smartly and visualize your financial growth.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f4f7fc",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #8399d4, #1cc88a)"
  },
  image: {
    width: "80%",
    maxWidth: "600px",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    marginBottom: "30px"
  
  },
  heading: {
    fontSize: "36px",
    color: "#2c3e50"
  },
  text: {
    fontSize: "18px",
    color: "#555"
  }
};

export default Home;
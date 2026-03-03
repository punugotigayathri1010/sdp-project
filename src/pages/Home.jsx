import React from 'react';

const Home = () => {
  return (
    <div style={{backgroundco}}>

      <img 
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
        alt="Expense Tracking"
        style={styles.image}
      />

      <h1 style={styles.heading}>
        Welcome to Expense Tracker
      </h1>

      <p style={styles.text}>
        Track your expenses smartly and visualize your financial growth.
      </p>

    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "60px 20px"
  },

  image: {
    width: "80%",
    maxWidth: "600px",
    borderRadius: "15px",
    marginBottom: "30px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
  },

  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px"
  },

  text: {
    fontSize: "18px",
    color: "#555"
  }
};

export default Home;
import React, { useState, useEffect } from "react";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200 );
  }, []);

  return (
    <div style={styles.container}>
      <img
        src="https://cdn.dribbble.com/userupload/44666325/file/822b88279dc8a004e3e9410767ce54b5.png?resize=752x&vertical=center"
        alt="Expense Tracking"
        style={{
          ...styles.image,
          transform: animate ? "scale(1)" : "scale(1.4)",
          opacity: animate ? 1 : 0,
        }}
      />

      <h1
        style={{
          ...styles.heading,
          transform: animate ? "translateY(0px)" : "translateY(40px)",
          opacity: animate ? 1 : 0,
        }}
      >
      </h1>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "linear-gradient(to right, #1e3c72, #96afdb)"
  },

  image: {
    width: "100%",
    maxWidth: "800px",
    borderRadius: "15px",
    marginBottom: "30px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
    transition: "all 1s ease",

  },

  heading: {
    fontSize: "32px",
    fontWeight: "700",
    transition: "all 1s ease",
  
  },
};

export default Home;
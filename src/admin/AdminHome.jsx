import React from "react";
import "./admin.css";

export default function AdminHome() {
  const adminUsername = sessionStorage.getItem("adminUsername") || "Admin";

  return (
    <div className="admin-content">
      <div className="admin-card">
        <h2>Welcome to Admin Dashboard</h2>
        <p>
          Logged in as: <strong>{adminUsername}</strong>
        </p>
        <p style={{ marginTop: "15px", color: "#555" }}>
          Use the navigation bar to manage users and system data.
        </p>
      </div>
    </div>
  );
}
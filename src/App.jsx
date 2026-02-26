import { BrowserRouter, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import AdminNavBar from "./admin/AdminNavBar";
import UserNavBar from "./user/UserNavBar";
import MainNavBar from "./pages/MainNavBar";

function App() {

  const getRole = () => {
    if (sessionStorage.getItem("isAdmin") === "true") return "admin";
    if (sessionStorage.getItem("isUser") === "true") return "user";
    return "guest";
  };

  const [role, setRole] = useState(getRole());

  return (
    <BrowserRouter>
      <RoleHandler role={role} setRole={setRole} />
    </BrowserRouter>
  );
}

function RoleHandler({ role, setRole }) {
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("isAdmin") === "true") {
      setRole("admin");
    } else if (sessionStorage.getItem("isUser") === "true") {
      setRole("user");
    } else {
      setRole("guest");
    }
  }, [location, setRole]);

  if (role === "admin") return <AdminNavBar />;
  if (role === "user") return <UserNavBar />;
  return <MainNavBar />;
}

export default App;
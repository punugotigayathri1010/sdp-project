import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
    navigate("/");
  }, [navigate]);

  return <h2>Logging out...</h2>;
}
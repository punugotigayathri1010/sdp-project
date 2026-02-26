import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
    navigate("/");
  }, [navigate]);

  return <h2>Logging out...</h2>;
}

export default UserLogout;
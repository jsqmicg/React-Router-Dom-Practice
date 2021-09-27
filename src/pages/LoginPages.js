import React from "react";
import useAuth from "../auth/useAuth";
import { useHistory, useLocation } from "react-router";

function LoginPages() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const previousObjectURL = location.state?.from;
  const handleLogin = () => {
    auth.login();
    history.push(previousObjectURL || "/dashboard");
    console.log(location);
  };
  const handleLogout = () => auth.logout();
  return (
    <div>
      {auth.user ? <h1>LogOut Page</h1> : <h1>Login Page</h1>}

      {auth.user ? (
        <button onClick={handleLogout}>Log Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
    </div>
  );
}

export default LoginPages;

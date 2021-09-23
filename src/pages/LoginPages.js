import React from "react";
<<<<<<< HEAD
import useAuth from "../auth/useAuth";
import { useHistory } from "react-router";

function LoginPages() {
  const history = useHistory();
  const auth = useAuth();
  const handleLogin = () => {
    auth.login();
    history.push("/dashboard");
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
=======

function LoginPages() {
  return (
    <div>
      <h1>Login Page</h1>
>>>>>>> main
    </div>
  );
}

export default LoginPages;

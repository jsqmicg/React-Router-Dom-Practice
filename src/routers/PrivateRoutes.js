import React from "react";
<<<<<<< HEAD
import { Route, Redirect, useLocation } from "react-router";
=======
import { Route, Redirect } from "react-router";
>>>>>>> main
import useAuth from "../auth/useAuth";
import DashboardPage from "../pages/Dashboards";

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();
  const location = useLocation();
  return (
    <Route {...rest}>
      {auth.user ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
}

export default PrivateRoute;

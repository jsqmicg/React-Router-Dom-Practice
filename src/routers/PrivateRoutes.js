import React from "react";
import { Route, Redirect, useLocation } from "react-router";
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

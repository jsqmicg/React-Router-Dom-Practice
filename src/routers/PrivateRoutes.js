import React from "react";
import { Route, Redirect } from "react-router";
import useAuth from "../auth/useAuth";
import DashboardPage from "../pages/Dashboards";

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();
  return (
    <Route {...rest}>
      {auth.user ? <Component /> : <Redirect to={"/login"} />}
    </Route>
  );
}

export default PrivateRoute;

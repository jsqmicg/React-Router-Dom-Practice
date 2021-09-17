import React from "react";
import { Route, Redirect } from "react-router";
import DashboardPage from "../pages/Dashboards";

//const user = null;
const user = { id: 1, username: "basstian94" };

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest}>{user ? <Component /> : <Redirect to={"/"} />}</Route>
  );
}

export default PrivateRoute;

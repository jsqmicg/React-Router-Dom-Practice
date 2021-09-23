import React from "react";
import { Route, Redirect } from "react-router";
<<<<<<< HEAD
import useAuth from "../auth/useAuth";
import DashboardPage from "../pages/Dashboards";

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();
  return (
    <Route {...rest}>
      {auth.user ? <Component /> : <Redirect to={"/login"} />}
    </Route>
=======
import DashboardPage from "../pages/Dashboards";

//const user = null;
const user = { id: 1, username: "basstian94" };

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest}>{user ? <Component /> : <Redirect to={"/"} />}</Route>
>>>>>>> main
  );
}

export default PrivateRoute;

import React from "react";
import { Route, Redirect, useLocation } from "react-router";
import useAuth from "../auth/useAuth";

function PublicRoute({ component: Component, ...rest }) {
  const auth = useAuth();
  const location = useLocation();
  return (
    <div>
      <Route {...rest}>
        {!auth.user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )}
      </Route>
    </div>
  );
}

export default PublicRoute;

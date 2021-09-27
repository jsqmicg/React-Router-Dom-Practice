import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

function NavBar() {
  const username = "Sebastián";
  const auth = useAuth();
  const handleLogout = () => auth.logout();
  const handleLogin = () => auth.login();
  return (
    <nav>
      <ul className="navbar">
        <li className="navbarItem">
          <NavLink exact to="/" activeClassName="active" className="item">
            Home
          </NavLink>
          {/* NavLink allows to follow the path without recharge the page, what is one of features of a single page aplication, in addition it allows to change the color of a link, when it is selected with prop activeClassName. We can use exact to avoid the problem of have a root route selected with other at the same time.*/}
        </li>
        <li className="navbarItem">
          <NavLink exact to="/about" activeClassName="active" className="item">
            About
          </NavLink>
        </li>
        <li className="navbarItem">
          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            className="item"
          >
            Contact
          </NavLink>
        </li>
        <li className="navbarItem">
          <NavLink
            exact
            to={`/profile/${username}`}
            activeClassName="active"
            className="item"
          >
            profile
          </NavLink>
        </li>
        <li className="navbarItem">
          <NavLink
            exact
            to={`/categories`}
            activeClassName="active"
            className="item"
          >
            Categories
          </NavLink>
        </li>
        <li className="navbarItem">
          <NavLink
            exact
            to={`/login`}
            activeClassName="active"
            className="item"
          >
            Login
          </NavLink>
        </li>
        <li className="navbarItem">
          <NavLink
            exact
            to={`/register`}
            activeClassName="active"
            className="item"
          >
            Register
          </NavLink>
        </li>
        <li className="navbarItem">
          <NavLink
            exact
            to={`/dashboard`}
            activeClassName="active"
            className="item"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="navbarItem">
          <NavLink
            exact
            to={`/payments`}
            activeClassName="active"
            className="item"
          >
            Payments
          </NavLink>
        </li>
        <li>
          {auth.user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={handleLogin}>Sign In</button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

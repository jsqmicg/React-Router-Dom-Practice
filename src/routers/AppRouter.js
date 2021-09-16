import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import AboutPage from "../pages/AboutPage";
import CategoriesPage from "../pages/CategoriesPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      {/*Shows the component on all routes*/}
      <Switch>
        {/*once it find the route, ignore the others*/}
        <Route exact path="/" component={HomePage} />
        {/*if it finds the path it will match the first path that has the / character, so that "exact" makes the path that is inside the prop, match if it is exact. A well practice is put the exact path to all routes*/}
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/profile/:username" component={ProfilePage} />
        <Route exact path="/categories" component={CategoriesPage} />
        <Route exact path="*" component={NotFoundPage} />
        {/*This route makes that any other route aoutside of our planification, shows the message of 404 error. Is necessary that this route be on final of switch routes, because its path prop takes all routes, and if is on top, will ever shows the 404 message.*/}
      </Switch>
    </Router>
  );
}

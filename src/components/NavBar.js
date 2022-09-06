import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-wrapper">
      <NavLink className="navbar-item" activeClassName="is-active" to="/">
        About Me
      </NavLink>

      <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to="/projects"
      >
        Projects
      </NavLink>

      <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to="/contact"
      >
        Contact
      </NavLink>
    </div>
  );
}

export default NavBar;

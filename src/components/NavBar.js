import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
    <li>
    <NavLink
      to="/"
    >Home</NavLink>
    </li>
    <li>
    <NavLink
      to="/cities"
      exact
    >Cities</NavLink>
    </li>
    </div>
  );
};

export default NavBar;
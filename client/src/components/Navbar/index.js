import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  const [isNavOpen, navIsOpen] = useState(false); // [value, fn]
  {
    /* <span onClick={() => navIsOpen(false)}>&#10006;</span> */
  }
  return isNavOpen ? (
    <nav className="navbar" onClick={() => navIsOpen(false)}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/Login"> REGISTER / LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link to="/About"> ABOUT THE ISSUE</Link>
        </li>
        <li className="nav-item">
          <Link to="/Swaddle"> SWADDLE A PENGUIN</Link>
        </li>
        <li className="nav-item">
          {/* if not logged in it askes you to login or register*/}
          <Link to="/Gallery"> GALLERY</Link>
        </li>
        <li className="nav-item">
          <Link to="/Donate"> DONATE</Link>
        </li>
      </ul>
    </nav>
  ) : (
    <span onClick={() => navIsOpen(true)}>&#9776;</span>
  );
}

export default Navbar;

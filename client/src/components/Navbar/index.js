import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/">Home (or LOGO image?)</Link>
        </li>
        <li className="nav-item">
          <Link to="/Login"> Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/Swaddle"> Swaddle (Create a Meme)</Link>
        </li>
        <li className="nav-item">
          {/* if not logged in it askes you to login or register*/}
          <Link to="/Gallery"> Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/Donate"> Donate</Link>
        </li>
        <li className="nav-item">
          <Link to="/About"> About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

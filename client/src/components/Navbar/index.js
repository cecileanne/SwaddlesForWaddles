import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {/* <a className="navbar-brand" href="/">
        Logo Goes HERE (img)
      </a> */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => props.handlePageChange("Home")}
            className="nav-link"
          >
            Home (or LOGO image?)
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#login"
            onClick={() => props.handlePageChange("Login")}
            className="nav-link"
          >
            Sign In
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#swaddle"
            onClick={() => props.handlePageChange("Swaddle")}
            className="nav-link"
          >
            Swaddle (Create a Meme)
          </a>
        </li>
        <li className="nav-item">
          {/* set so this doesn't show unless logged in? */}
          <a
            href="#gallery"
            onClick={() => props.handlePageChange("Gallery")}
            className="nav-link"
          >
            My Meme Gallery
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#donate"
            onClick={() => props.handlePageChange("Donate")}
            className="nav-link"
          >
            Donate
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => props.handlePageChange("About")}
            className="nav-link"
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios"

function Navbar(props) {
  const [isNavOpen, navIsOpen] = useState(false); // [value, fn]

  const logout = function() {
    axios.get("/auth/logoutUser").then(function(res){
      if (props.history) {
        props.history.push("/Login")
      };
    })

  }

  return isNavOpen && !props.isLoading ? (
    <nav className="navbar" onClick={() => navIsOpen(false)}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/About"> ABOUT THIS APP</Link>
        </li>
        <li className="nav-item">
          <Link to="/Swaddle"> SWADDLE A PENGUIN</Link>
        </li>
        <li className="nav-item">
          <Link to="/" onClick={logout}> LOGOUT</Link>
        </li>
        {/* <li className="nav-item">
          {/* if not logged in it askes you to login or register*/}
        {/* <Link to="/Gallery"> GALLERY</Link> */}
        {/* </li> */}
        <li className="nav-item">
          <Link to="/Donate"> DONATE</Link>
        </li>
      </ul>
    </nav>
  ) : isNavOpen && props.isLoading ? (
    <nav className="navbar" onClick={() => navIsOpen(false)}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/">Home (or LOGO image?)</Link>
        </li>
        <li className="nav-item">
          <Link to="/Login"> Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/About"> About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Swaddle"> Swaddle a Penguin</Link>
        </li>
        <li className="nav-item">
          {/* if not logged in it askes you to login or register*/}
          <Link to="/Gallery"> Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/Donate"> Donate</Link>
        </li>
      </ul>
  </nav> 
  ) : (
    <span onClick={() => navIsOpen(true)}>&#9776;</span>
  );
}

export default Navbar;

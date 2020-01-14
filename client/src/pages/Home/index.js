import React from "react";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import "./style.css";
import { Container } from "../../components/Grid";

function Home() {
  return (
    <div className="background">
      <div className="adoption">
        <h2 className="adopt">ADOPT</h2>
        <h2>A PENGUIN</h2>
      </div>
      <div className="logo-wrapper">
        <Navbar className="navbar" />
        <img
          className="mainlogo"
          src={
            process.env.PUBLIC_URL +
            "/assets/images/icons/swaddles_for_waddles_logo.png"
          }
        />
      </div>
      <img
        className="front-page-photo"
        src={
          process.env.PUBLIC_URL +
          "/assets/images/icons/penguins_for_frontpage.jpg"
        }
      />

      <h1 className="brand-text">SWADDLES FOR WADDLES</h1>
      <p className="brand-subtext">Memes for a Cause</p>
    </div>
  );
}

export default Home;

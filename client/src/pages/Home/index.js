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
      <Container>
        <Navbar className="navbar" />
        <div className="logo-wrapper">
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
        <div>
          <h1 className="brand-text"> SWADDLES FOR WADDLES</h1>
          <p className="brand-subtext">Memes for a Cause</p>
        </div>
      </Container>
    </div>
  );
}

export default Home;

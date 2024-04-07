import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./../Assets/Logo.png";

export const NavbarComponent = () => {
  return (
    <div className="hero-nav-container">
      <Container>
        <Row>
          <Col xs={1}>
            <div className="nav-logo">
              <img alt="" src={Logo} />
            </div>
          </Col>
          <Col xs={1}>
            <p className="nav-link">Home</p>
          </Col>
          <Col xs={1}>
            <p className="nav-link">Destination</p>
          </Col>
          <Col xs={9}>
            <button className="nav-button">Get the App</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

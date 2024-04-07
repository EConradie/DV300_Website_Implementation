import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./../Assets/Logo.png";
import Icons from "./../Assets/icons.png";

export const FooterComponenet = () => {
  return (
    <>
      <div className="footer-container">
        <Container>
          <Row>
            <div className="footer-form-container">
              <p className="form-title">Subscribe to stay updated</p>
              <div className="form-inputs">
                <input
                  placeholder="Space traveller name"
                  className="form-input"
                ></input>
                <input
                  placeholder="Contact email address"
                  className="form-input"
                ></input>
                <button className="form-button">Join newsletter</button>
              </div>
            </div>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={9}>
              <div className="left-content">
                <img alt="" src={Logo}></img>
                <p className="left-content-text">Erik © 2024</p>
              </div>
            </Col>
            <Col xs={0}>
              <div className="right-content">
                <div className="footer-links">
                  <p className="footer-links-title">Links</p>
                  <p className="footer-links-text">Home</p>
                  <p className="footer-links-text">Destination</p>
                  <p className="footer-links-text">Mobile App</p>
                </div>
                <div className="footer-follow">
                  <p className="footer-follow-title">Follow us</p>
                  <img className="footer-icons" alt="" src={Icons}></img>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

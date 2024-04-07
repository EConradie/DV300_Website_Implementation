import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";

export const CardComponent = (props) => {
  const { img, title, text } = props;

  return (
    <Col xs={4}>
      <div className="card-container">
        <img className="card-img" alt="" src={img}></img>

        <div className="card-title">{title}</div>
        <div className="card-line"></div>
        <div className="card-text">{text}</div>
      </div>
    </Col>
  );
};

import React from "react";
import { Col, Row } from "react-bootstrap";
import "./landings.css";

const SectionHeadingCenter = () => {
  return (
    <Row className="mb-6 justify-content-center">
      <Col lg={8} md={12} sm={12} className="text-center p-2 bd-highlight">
        <span className="text-highlight column-title mb-3 d-block text-uppercase fw-semi-bold ls-xl">
          The Assign Ref Difference
        </span>
        <h2 className="mb-2 display-4 fw-bold column-title ">
          Match, rank, get paid, faster.
        </h2>
        <p className="lead column-title mb-4">
          A modern one-step website with everything you need in sport league
          manangement software including registration, game
          scheduling,communications and more.
        </p>
        <hr />
      </Col>
    </Row>
  );
};

export default SectionHeadingCenter;

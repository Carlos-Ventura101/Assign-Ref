import React from "react";
//import Typed from "react-typed";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../../assets/images/brand/logo/logo_horizontal.png";

const HeroTyped = () => {
  return (
    <div className="py-lg-22 py-lg-22 p-2 hero-container bg-auto">
      <Container>
        <Row className="justify-content-center pt-6">
          <Col xl={10} lg={10} md={12}>
            <div className="py-8 py-lg-0 text-center">
              <h1 className="display-2 fw-bold mb-8 text-primary">
                <span className="text-primary dark px-3 px-md-0">
                  <Image src={Logo} style={{ width: "250px" }} />
                  {/* Experience Assign Ref */}
                </span>
                <span className="text-white dark ms-2">
                  {/* <Typed
                    strings={["Assign", "Pay", "Evaluate", "Train"]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                  /> */}
                </span>
              </h1>
              <p className="mb-4 h2 text-white">
                Manage Games, Officials Rankings, Training, and Pay with Assign
                Ref. Watch, play, learn, make, and discover, all within one
                place.
              </p>
              <Link to="/dashboard" className="btn btn-primary me-2">
                Go to Dashboard
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HeroTyped;

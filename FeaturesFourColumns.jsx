import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SectionHeadingCenter from "./SectionHeadingCenter";
import FeatureTopIcon from "./FeatureTopIcon";

const FeaturesFourColumns = () => {
  const features = [
    {
      id: 1,
      icon: "folder",
      title: "ROBUST PLATFORM",
      description: `We are a one-stop-shop for assigning, reporting and training solutions.`,
    },
    {
      id: 2,
      icon: "user",
      title: "CUSTOMER SUPPORT",
      description: `Our Support staff is dedicated to your success. Contact us by phone or email, to schedule a Demo.`,
    },
    {
      id: 3,
      icon: "award",
      title: "SAVE MONEY",
      description: `We have a low annual fee and low credit card fees. That's it.`,
    },
    {
      id: 4,
      icon: "users",
      title: "GAME PERSONNEL",
      description: `Manage this critical group of people neccesary for the successful operation of athletic events.`,
    },
  ];

  return (
    <div className="py-12 py-lg-12 landing-container bg-white texture-background-white">
      <Container>
        <SectionHeadingCenter />
        <Row className="px-4">
          {features.map((item, index) => {
            return (
              <Col lg={3} md={6} sm={12} key={index} className="px-5">
                <FeatureTopIcon item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesFourColumns;

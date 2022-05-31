import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container style={{ marginBottom: "100px" }}>
      <Row>
        <Col md={8} className="my-auto mx-auto mt-5 my-5">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <img
              className="img-fluid"
              src={"https://i.ibb.co/6sRgrMW/492x0w.webp"}
              alt=""
            />
          </div>
          <p className="text-justify py-2">
            Mujib Year is the year declared to celebrate on the occasion of the
            centennial birth anniversary of the founding leader of Bangladesh,
            Sheikh Mujibur Rahman. The Government of Bangladesh has declared the
            year 2020-21 as the Mujib Year. This year will be celebrated from
            March 17, 2020, to December 16, 2021
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

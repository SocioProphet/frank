import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";

const Welcome = props => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center col-12">
            <img style={ { maxHeight: 300 } } src="Assets/frank.png" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;

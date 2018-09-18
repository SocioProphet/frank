import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import MapView from "../Containers/MapView";
import Settings from "../Containers/Settings";
import Stamps from "../Containers/Stamps";
import Styles from "./Layout.css"

import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";

const Layout = props => {
  return (
    <Fragment>
      <main>{props.children}</main>
      <Menu />
    </Fragment>
  );
};

const Menu = () => (
  <Fragment>
    <Router>
      <Fragment>
        <Route exact path="/" component={MapView} />
        <Route path="/stamps" component={Stamps} />
        <Route path="/settings" component={Settings} />

        <Container>
          <Row>
            <Navbar bg="light" expand="lg" fixed="bottom">
              <Nav className="mr-auto">
                <Col>
                  <LinkContainer exact to="/">
                    <Nav.Link>MapView</Nav.Link>
                  </LinkContainer>
                </Col>
                <Col>
                  <LinkContainer to="/stamps">
                    <Nav.Link>Stamps</Nav.Link>
                  </LinkContainer>
                </Col>
                <Col>
                  <LinkContainer to="/settings">
                    <Nav.Link>Settings</Nav.Link>
                  </LinkContainer>
                </Col>
              </Nav>
            </Navbar>
          </Row>
        </Container>
      </Fragment>
    </Router>
  </Fragment>
);

export default Layout;

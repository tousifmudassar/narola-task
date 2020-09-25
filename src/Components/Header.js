import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Navbar,
  Collapse,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  return (
    <>
      <Row>
        <Col>
          <Navbar color="primary" light expand="md">
            <Link to="/" className="navbar-brand">
              <h2 className="navbar-brand-logo">DEMO Streaming</h2>
            </Link>
            <Collapse navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/series">
                    Series
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/movies">
                    Movies
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <Navbar color="dark" grey expand="md">
            <Nav navbar>
              <NavItem>
                <h2 className="navbar-brand-logo">Popular Titles</h2>
              </NavItem>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

export default Header;

import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col, Navbar,Collapse, NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';

const Header = () => {
    return (
        <Row>
            <Col>
                <Navbar color="light" light expand="md">
                    <Link to="/" className="navbar-brand">Todo App</Link>
                    <Collapse navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </NavItem>

                            <NavItem>
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </NavItem>

                            <NavItem>
                                <Link className="nav-link" to="/logout">Logout</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Col>
        </Row>
    )
}

export default Header; 
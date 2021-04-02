import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <Navbar className="menuBar" expand="lg">
            <Container>
                <Navbar.Brand><NavLink active to="/" className="navBrandName"><span className="navHighlight">T-shirts</span> Galore</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end menu" activeKey="/">
                        <Nav.Item>
                            <NavLink exact activeClassName="menuStyle" to="/">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink activeClassName="menuStyle" to="/orders">Orders</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink activeClassName="menuStyle" to="/admin">Admin</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink activeClassName="menuStyle" to="/login">Log In</NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
import React from "react";
import "./header.css";
import {Nav, Container, Navbar, NavbarBrand} from "react-bootstrap";
const header = function () {
    return(
        <Navbar bg="dark" expand="lg" variant="dark" className={"shadow"}>
            <Container>
                <Navbar.Brand href="/home">Мајстор.mk</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Почетна</Nav.Link>
                        <Nav.Link href="/price">Ценовник</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <NavbarBrand className="moto">Најголемиот избор на работници во Македонија!</NavbarBrand>
            </Container>
        </Navbar>
    )
}

export default header;
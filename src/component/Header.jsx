import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">File Upload App</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;

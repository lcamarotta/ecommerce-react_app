import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { BsFillCartCheckFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <Navbar className="ms-1 justify-content-center w-100" bg="light" expand="lg">
      <Container className="mx-5">
        <Navbar.Brand href="#home" className="me-5">React eCommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">On Sale</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cat1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cat2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cat3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <BsFillCartCheckFill className="mx-5"/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
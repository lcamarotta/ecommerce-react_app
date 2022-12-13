import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <Navbar className="mx-1 justify-content-center" bg="light" expand="lg">
      <Container fluid className="mx-5">
        <Navbar.Brand href="">
            <img
              alt="website brand"
              src="/logo.png"
              width="90"
              height="50"
              className="d-inline-block align-center"
            />
            <Link to='/' className='text-decoration-none text-reset'>LaptopShopping.com</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-4 me-auto align-items-center">
            <Link to="onsale" className='text-decoration-none'>On Sale</Link>
            <NavDropdown title="Search by Use" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/category/work" className='text-decoration-none text-reset'>Work</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/school" className='text-decoration-none text-reset'>School</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/gaming" className='text-decoration-none text-reset'>Gaming</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/everyday" className='text-decoration-none text-reset'>Everyday</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
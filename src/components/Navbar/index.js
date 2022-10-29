import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../styles/components/navbarcomp.css"
import logo from "../../assets/bookshelf.png"
import glass from "../../assets/magnifying-glass.png"

const Navbarnavigator = () => {
  return (
    <Navbar bg="light" expand="lg" className='fNavbar'>
      <Container fluid className="Wrapperr">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="All Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Superhero</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Fantasy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Romance
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="All Times" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Latest</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Newest
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Finished
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <img src={glass} className="glass" alt="" />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <img src={logo} alt="" />
          <p className="logo-text">Library</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navbarnavigator
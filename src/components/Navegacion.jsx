import React from 'react';
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Paginas } from '../data/PaginasApp';

class Navegacion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light">
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                className="logo-image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/100px-React.svg.png"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  {Paginas.map((item) => {
                    return (
                      <Nav.Link as={Link} to={item.path}>
                        {item.title}
                      </Nav.Link>
                    );
                  })}
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default Navegacion;

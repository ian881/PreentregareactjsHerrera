import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../CardWidget/CardWidget';


function NavScrollExample() {
  return ( 
    <div className='divnav'>
        <nav>
          <Navbar  variant="dark" expand="lg">
              <Container fluid>
                  <Navbar.Brand href="#">Tienda Online</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                      <Nav
                          className="me-auto my-2 my-lg-0"
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                      >
                          <Nav.Link href="#action1">Inicio</Nav.Link>
                          <Nav.Link href="#action2">Productos</Nav.Link>
                          <NavDropdown title="Ofertas" id="navbarScrollingDropdown">
                              <NavDropdown.Item href="#action3">Ofertas</NavDropdown.Item>
                              <NavDropdown.Item href="#action4">
                                  Apruebeme 
                              </NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action5">
                                  porfa
                              </NavDropdown.Item>
                          </NavDropdown>
                         
                      </Nav>
                      <Form className="d-flex">
                          <Form.Control
                              type="search"
                              placeholder="Buscar"
                              className="me-2"
                              aria-label="Search" />
                          <Button variant="outline-success">Buscar</Button>
                      </Form>
                      
                  </Navbar.Collapse>
                  <CardWidget></CardWidget>
              </Container>
           
          </Navbar>
         </nav>
      </div>
      
  );
}

export default NavScrollExample;
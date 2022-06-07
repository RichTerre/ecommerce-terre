import {Navbar, Container, Nav} from 'react-bootstrap'
import CartWidget from "./CartWidget/index";


function NavBar() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> 
          <Nav.Link href="#">
            <CartWidget/>
          </Nav.Link>        
      </Container>
    </Navbar>    
  </>
  )
}

export default NavBar

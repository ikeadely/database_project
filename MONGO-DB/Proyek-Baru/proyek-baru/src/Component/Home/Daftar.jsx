import React from "react";
import { Navbar,Nav,Container,NavDropdown} from "react-bootstrap";


function Daftar (){
    return(
          <Navbar  expand="lh">
      <Container>
          <Navbar.Brand href="#home">DATA SEKOLAHAN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#profil">Profil</Nav.Link>
              <Nav.Link href="#data">Data</Nav.Link>
              <Nav.Link href="#LogOut">Log Out</Nav.Link>
              <NavDropdown  title="Hubungi Kami" id="basic-nav-dropdown">
                <NavDropdown.Item href="#pesantren">Instagram</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#pengasuh">Whatshapp</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#pesantren">Twitter</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}




export default  Daftar ;

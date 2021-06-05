import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
   return (
      <header>
         <Navbar bg="light" expand="lg" variant="light" collapseOnSelect>
            <Container>
               <LinkContainer to="/">
                  <Navbar.Brand>
                     My Library
                  </Navbar.Brand>
               </LinkContainer>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                     <LinkContainer to="/books">
                        <Nav.Link>
                           <i className="fas fa-book" /> My Books
                        </Nav.Link>
                     </LinkContainer>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   );
};

export default Header;

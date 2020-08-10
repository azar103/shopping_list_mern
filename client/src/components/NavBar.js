import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import { Container } from 'react-bootstrap';
export default function NavBar() {
    const [isOpen, setIsOpen]= useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
                  <Navbar color="light" light expand="md">
         <Container>
        <NavbarBrand href="/">ShoppingList</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
       
            <NavItem>
              <NavLink href="https://github.com/azar103">GitHub</NavLink>
            </NavItem>
          
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
 
        </div>
    )
}

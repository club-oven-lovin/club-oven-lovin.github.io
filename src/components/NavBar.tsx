'use client';

import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => (
  <Navbar bg="white" expand="lg" className="shadow-sm py-3">
    <Container>
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <Image 
          src="/images/club-oven-lovin-logo.png" 
          alt="Toaster Oven Lovin'" 
          width={40} 
          height={40}
          className="me-2"
        />
        <span className="fw-bold" style={{ color: '#1a5f4f' }}>
          Toaster Oven Lovin&apos;
        </span>
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center">
          <Nav.Link href="/" className="mx-2">
            Suatagames
          </Nav.Link>
          <Nav.Link href="/browse-recipie" className="mx-2">
            Recipes
          </Nav.Link>
          <Nav.Link href="/vendors" className="mx-2">
            Vendors
          </Nav.Link>
          <Nav.Link href="/ideas" className="mx-2">
            Ideas
          </Nav.Link>
          <Nav.Link href="/admin" className="mx-2">
            Admin
          </Nav.Link>
          <Nav.Link href="/login" className="mx-2">
            login In
          </Nav.Link>
          <Button
            as={Link}
            href="/signup"
            style={{
              backgroundColor: '#1a5f4f',
              borderColor: '#1a5f4f',
              borderRadius: '20px',
              padding: '8px 24px',
              marginLeft: '10px'
            }}
          >
            Tuʻihono
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;

'use client';

import Link from 'next/link';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Next.js Example Form</Navbar.Brand>
    </Container>
  </Navbar>
);

export default NavBar;

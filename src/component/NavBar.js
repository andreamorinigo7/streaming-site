import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import Search from "./Search";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="/home">Anime</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {" "}
            <Nav.Link href="/TopAnime">Top Anime</Nav.Link>
            <Nav.Link href="/NowStreaming">Streaming Now</Nav.Link>
          </Nav>
          <Search />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

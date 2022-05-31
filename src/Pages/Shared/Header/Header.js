import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import auth from "../../../firebase.init";
import { Link } from "react-router-dom";
import CustomLinkV from "../../CustomLinkV/CustomLinkV";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="https://i.ibb.co/6sRgrMW/492x0w.webp"
            width="70"
            height="70"
            className="d-inline-block align-center nav-logo"
          />{" "}
          <b className="logo-title">
            <span style={{ color: "#EB7700" }}>Mujib</span> 100
          </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
          <Nav className="ms-auto">
            <Nav.Link as={CustomLinkV} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={CustomLinkV} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={CustomLinkV} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={CustomLinkV} to="/client">
              Client
            </Nav.Link>
            <Nav.Link as={CustomLinkV} to="/about">
              About
            </Nav.Link>
            <Nav.Link>
              {user ? (
                <Button
                  onClick={handleSignOut}
                  variant="link"
                  className="text-decoration-none"
                  style={{ color: "#EB7700" }}
                >
                  <b>Log Out</b>
                </Button>
              ) : (
                <Nav.Link className="my-auto" as={CustomLinkV} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

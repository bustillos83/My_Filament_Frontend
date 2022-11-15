import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>My Filaments!</Navbar.Brand>
          <Nav className="me-auto">
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "black",
                })}
              >
                Home
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/signup"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "black",
                })}
              >
                Sign Up
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "black",
                })}
              >
                Login
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/add_filament"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "black",
                })}
              >
                Add Filament
              </NavLink>
            </div>
            <Nav.Link active>Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;

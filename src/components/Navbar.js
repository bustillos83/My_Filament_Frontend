import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>My Filaments!</Navbar.Brand>
          <Nav className="">
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
              >
                Home
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/signup"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
              >
                Sign Up
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
              >
                Login
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/add_filament"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
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

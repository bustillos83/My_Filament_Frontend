import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import { useAuth, logout } from "../auth";

const LoggedInLinks = () => {
  return (
    <>
      <Nav className="">
        <div style={{ margin: "10px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "black" : "white",
              textDecoration: "none",
            })}
          >
            Home
          </NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <NavLink
            to="/add_filament"
            style={({ isActive }) => ({
              color: isActive ? "black" : "white",
              textDecoration: "none",
            })}
          >
            Add Filament
          </NavLink>
        </div>
        <div style={{ margin: "2px" }}>
          <Nav.Link
            active
            href="#"
            onClick={() => {
              logout();
            }}
          >
            Log out
          </Nav.Link>
        </div>
      </Nav>
    </>
  );
};

const LoggedOutLinks = () => {
  return (
    <>
      <Nav className="">
        <div style={{ margin: "10px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "black" : "white",
              textDecoration: "none",
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
              textDecoration: "none",
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
              textDecoration: "none",
            })}
          >
            Login
          </NavLink>
        </div>
      </Nav>
    </>
  );
};

const Navbar1 = () => {
  const [logged] = useAuth();
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>My Filaments!</Navbar.Brand>
          {logged ? <LoggedInLinks /> : <LoggedOutLinks />}
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;

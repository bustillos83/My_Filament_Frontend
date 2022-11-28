import React from "react";
import pic from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth, logout } from "../auth";
import { MDBFooter } from "mdb-react-ui-kit";

const LoggedInLinks = () => {
  return (
    <>
      <Nav className="" id="main-nav">
        <div style={{ margin: "10px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "white" : "black",
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
              color: isActive ? "white" : "black",
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
      <Nav className="" id="main-nav">
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
          <div style={{ margin: "10px" }}></div>
        </div>
      </Nav>
    </>
  );
};

const Navbar1 = () => {
  const [logged] = useAuth();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };
  return (
    <>
      <Navbar className="bg-custom">
        <Container>
          <Navbar.Brand onClick={routeChange} href="#">
            <img src={pic} alt="My Filament!" />
          </Navbar.Brand>
          {logged ? <LoggedInLinks /> : <LoggedOutLinks />}
        </Container>
      </Navbar>

      <MDBFooter
        id="footer"
        className="text-center text-white"
        style={{ backgroundColor: "#21081a" }}
      >
        <div
          className="text-center p-0"
          id="footer"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:{" "}
          <a
            className="text-white"
            href="https://www.linkedin.com/in/fernandobustillos/"
            target="blank"
          >
            Fernando Bustillos
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Navbar1;

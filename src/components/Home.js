import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";

const LoggedInHome = () => {
  return (
    <div className="filament">
      <h1 className="titlePage">Your Filaments!</h1>
    </div>
  );
};

const LoggedOutHome = () => {
  return (
    <div className="home container">
      <h1 className="heading">My Filaments!</h1>
      <Link to="/signup" className="btn btn-primary btn-lg">
        Get started
      </Link>
    </div>
  );
};

const HomePage = () => {
  const [logged] = useAuth();
  return <div>{logged ? <LoggedInHome /> : <LoggedOutHome />}</div>;
};

export default HomePage;

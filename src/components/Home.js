import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import Filament from "./Filaments";

let baseUrl = "http://localhost:8000";

const LoggedInHome = (props) => {
  const [filaments, setFilaments] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/filament/filaments")
      .then((res) => res.json())
      .then((data) => {
        setFilaments(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="filament">
      <h1 className="titlePage">Your Filaments!</h1>
      {filaments.map((filament) => (
        <Filament
          key={filament.id}
          name={filament.name}
          type={filament.type}
          color={filament.color}
          qty={filament.qty}
        />
      ))}
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

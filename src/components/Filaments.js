import React from "react";
import { Card } from "react-bootstrap";

const Filament = ({ name, type, color, qty }) => {
  return (
    <Card style={{ width: "10rem" }} className="Card">
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>Type: {type}</Card.Text>
        <Card.Text>Color: {color}</Card.Text>
        <Card.Text>Qty: {qty}</Card.Text>
        <br></br>
      </Card.Body>
    </Card>
  );
};

export default Filament;

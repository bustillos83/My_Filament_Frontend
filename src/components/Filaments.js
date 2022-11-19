import React from "react";
import { Card, Modal, Button } from "react-bootstrap";

const Filament = ({ name, type, color, qty, onClick, onDelete }) => {
  return (
    <Card style={{ width: "10rem" }} className="Card">
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>Type: {type}</Card.Text>
        <Card.Text>Color: {color}</Card.Text>
        <Card.Text>Qty: {qty}</Card.Text>
        <Button variant="primary" onClick={onClick}>
          Update
        </Button>{" "}
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
        <br></br>
      </Card.Body>
    </Card>
  );
};

export default Filament;

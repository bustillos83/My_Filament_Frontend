import React from "react";
import Container from "react-bootstrap/Container";
import { Card, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Filament({ name, type, color, qty, onClick, onDelete }) {
  return (
    <div>
      <Container>
        <Card border="info">
          <Card.Body className="cardBody">
            <Card.Title>Name: {name}</Card.Title>
            <Card.Title>Type: {type}</Card.Title>
            <Card.Title>Color: {color}</Card.Title>
            <Card.Title>Qty: {qty}</Card.Title>
            <Button variant="outline-primary" onClick={onClick}>
              Update
            </Button>{" "}
            <Button variant="outline-danger" onClick={onDelete}>
              Delete
            </Button>{" "}
            <Button
              variant="outline-success"
              href="https://www.amazon.com/s?k=filamanet&crid=I7TNWIE6N1IL&sprefix=filamanet%2Caps%2C76&ref=nb_sb_noss_2"
              target="blank"
            >
              buy more
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Filament;

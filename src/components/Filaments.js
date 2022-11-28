import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Card, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";

function Filament({ id, name, type, color, qty, onClick, onDelete }) {
  return (
    <div>
      <Container>
        <Row>
          <Card className="cardBody">
            <Card.Body>
              <Card.Title>Name: {name}</Card.Title>
              <Card.Title>Type: {type}</Card.Title>
              <Card.Title>Color: {color}</Card.Title>
              <Card.Title>Qty: {qty}</Card.Title>
              <Button variant="outline-primary" onClick={onClick}>
                Update
              </Button>{" "}
              <Button variant="outline-danger" onClick={onDelete}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Filament;

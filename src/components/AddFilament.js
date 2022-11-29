import React from "react";
import "../styles/main.css";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

const AddFilament = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //Route change to go back to home page
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  const addFilament = (data) => {
    console.log(data);

    const token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");
    console.log(token);

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(data),
    };
    fetch(baseUrl + "/filament/filaments", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="form">
        <h1>Add New Filament</h1>
        <Form>
          <Row>
            <Col lg={4}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register("name", { required: true, maxLength: 25 })}
                />
              </Form.Group>
              {errors.name && (
                <p style={{ color: "red" }}>
                  <small>Name is required</small>{" "}
                </p>
              )}
              {errors.name?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>Name should be less than 25</small>
                </p>
              )}
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  {...register("type", { required: true, maxLength: 255 })}
                />
              </Form.Group>
              {errors.type && (
                <p style={{ color: "red" }}>
                  <small>Type is required</small>{" "}
                </p>
              )}
              {errors.type?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>Type should be less than 255</small>
                </p>
              )}
              <Form.Group>
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  {...register("color", { required: true, maxLength: 255 })}
                />
              </Form.Group>
              {errors.color && (
                <p style={{ color: "red" }}>
                  <small>Color is required</small>{" "}
                </p>
              )}
              {errors.color?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>Color should be less than 255</small>
                </p>
              )}
              <Form.Group>
                <Form.Label>Qty</Form.Label>
                <Form.Control
                  type="integer"
                  {...register("qty", { required: true, maxLength: 255 })}
                />
              </Form.Group>
              {errors.qty && (
                <p style={{ color: "red" }}>
                  <small>Quantity is required</small>{" "}
                </p>
              )}
              {errors.qty?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>Quantity should be less than 255</small>
                </p>
              )}
              <br></br>
              <Form.Group>
                <Button
                  variant="outline-primary"
                  onClick={handleSubmit(addFilament)}
                >
                  Save
                </Button>{" "}
                <Button variant="outline-success" onClick={routeChange}>
                  Home
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AddFilament;

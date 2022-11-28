import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../auth";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  //   console.log(watch("username"));
  //   console.log(watch("password"));

  const loginUser = (data) => {
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(baseUrl + "/auth/login", requestOptions).then((res) =>
      res.json().then((data) => {
        console.log(data.access_token);
        login(data.access_token);

        navigate("/");
      })
    );

    reset();
  };

  return (
    <div className="container">
      <div className="'form">
        <h1>Welcome! </h1>
        <p>
          <h4>Please log in to continue</h4>
        </p>
        <form>
          <Row>
            <Col xs={4}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  {...register("username", { required: true, maxLength: 25 })}
                />
              </Form.Group>
              {errors.username && (
                <p style={{ color: "red" }}>
                  <small>Username is required</small>{" "}
                </p>
              )}
              {errors.username?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>Username should less than 25 characters</small>
                </p>
              )}
              <br></br>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="create a password"
                  {...register("password", { required: true, minLength: 8 })}
                />
              </Form.Group>
              {errors.username && (
                <p style={{ color: "red" }}>
                  <small>Password is required</small>{" "}
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p style={{ color: "red" }}>
                  <small>Password should be more than 8 characters</small>
                </p>
              )}
              <br></br>
              <Form.Group>
                <Button
                  as="sub"
                  variant="outline-dark"
                  onClick={handleSubmit(loginUser)}
                >
                  Login
                </Button>
              </Form.Group>
              <Form.Group>
                <br></br>
                <small>
                  Need an account? <Link to="/signup">Sign up for free</Link>
                </small>
              </Form.Group>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

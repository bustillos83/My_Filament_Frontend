import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

let baseUrl = "http://localhost:8000";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

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
        console.log(data);
      })
    );

    reset();
  };

  return (
    <div className="container">
      <div className="'form">
        <h1>Login Page</h1>
        <form>
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
              variant="primary"
              onClick={handleSubmit(loginUser)}
            >
              Login
            </Button>
          </Form.Group>
          <Form.Group>
            <br></br>
            <small>
              Don't have an account? <Link to="/signup">Create Account</Link>
            </small>
          </Form.Group>
        </form>
      </div>
    </div>
  );
};

export default Login;

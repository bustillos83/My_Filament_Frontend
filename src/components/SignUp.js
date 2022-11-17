import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

let baseUrl = "http://localhost:8000";

const SignUp = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const [serverResponse, setServerResponse] = useState("");

  const submitForm = (data) => {
    // console.log(data);

    if (data.password === data.confirmPassword) {
      const body = {
        username: data.username,
        email: data.email,
        password: data.password,
      };
      const requestOptions = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      };

      fetch(baseUrl + "/auth/signup", requestOptions).then((res) =>
        res
          .json()
          .then((data) => {
            console.log(data);
            setServerResponse(data.message);
            console.log(serverResponse);

            setShow(true);
          })
          .catch((err) => console.log(err))
      );

      reset();
    } else {
      alert("Passwords do not match");
    }
  };
  console.log(watch("username"));
  console.log(watch("email"));
  console.log(watch("password"));
  console.log(watch("confirmPassword"));

  return (
    <div className="container">
      <div className="'form">
        {show ? (
          <>
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
              <p>{serverResponse}</p>
            </Alert>
            <h1>Sign Up Page</h1>
          </>
        ) : (
          <h1>Sign Up Page</h1>
        )}
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
              <small>Username is required</small>
            </p>
          )}

          {errors.username?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              <small>25 characters max</small>
            </p>
          )}
          <br></br>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true, maxLength: 80 })}
            />
          </Form.Group>

          {errors.email && (
            <p style={{ color: "red" }}>
              <small>Email is required</small>
            </p>
          )}

          {errors.email?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              <small>80 characters max</small>
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

          {errors.password && (
            <p style={{ color: "red" }}>
              <small>Password is required</small>
            </p>
          )}

          {errors.password?.type === "minLength" && (
            <p style={{ color: "red" }}>
              <small>Password must be 8 characters or more</small>
            </p>
          )}
          <br></br>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm password"
              {...register("confirmPassword", { required: true, minLength: 8 })}
            />

            {errors.confirmPassword && (
              <p style={{ color: "red" }}>
                <small>Confirm password is required</small>
              </p>
            )}

            {errors.password?.type === "minLength" && (
              <p style={{ color: "red" }}>
                <small>Password must be 8 characters or more</small>
              </p>
            )}
          </Form.Group>
          <br></br>

          <Form.Group>
            <Button
              as="sub"
              variant="primary"
              onClick={handleSubmit(submitForm)}
            >
              Sign Up
            </Button>
          </Form.Group>
          <Form.Group>
            <br></br>
            <small>
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </Form.Group>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

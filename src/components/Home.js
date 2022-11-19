import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import Filament from "./Filaments";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

let baseUrl = "http://localhost:8000";

const LoggedInHome = (props) => {
  const [filaments, setFilaments] = useState([]);
  const [show, setShow] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [filamentId, setFilamenId] = useState(0);

  useEffect(() => {
    fetch(baseUrl + "/filament/filaments")
      .then((res) => res.json())
      .then((data) => {
        setFilaments(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getAllFilaments = () => {
    fetch(baseUrl + "/filament/filaments")
      .then((res) => res.json())
      .then((data) => {
        setFilaments(data);
      })
      .catch((err) => console.log(err));
  };

  // Modal
  const closedModal = () => {
    setShow(false);
  };

  const showModal = (id) => {
    setShow(true);
    setFilamenId(id);
    // console.log("Hello " + id);

    filaments.forEach((filament) => {
      if (filament.id === id) {
        setValue("name", filament.name);
        setValue("type", filament.type);
        setValue("color", filament.color);
        setValue("qty", filament.qty);
      }
    });
  };
  // ..................

  let token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");
  //Update Filament
  const UpdateFilament = (data) => {
    console.log(data);

    const requestOptions = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(data),
    };

    fetch(baseUrl + `/filament/filaments/${filamentId}`, requestOptions).then(
      (res) =>
        res
          .json()
          .then((data) => {
            console.log(data);
            const reload = window.location.reload();
            reload();
          })
          .catch((err) => console.log(err))
    );
  };

  //   delete function
  const deleteFilament = (id) => {
    console.log(id);

    const requestOptions = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    };

    fetch(baseUrl + `/filament/filaments/${id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllFilaments();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="filament">
      <Modal show={show} size="lg" onHide={closedModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p>Update Filament</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
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
              <Button variant="primary" onClick={handleSubmit(UpdateFilament)}>
                Update
              </Button>
            </Form.Group>
          </form>
        </Modal.Body>
      </Modal>
      <h1 className="titlePage">Your Filaments!</h1>
      {filaments.map((filament) => (
        <Filament
          key={filament.id}
          name={filament.name}
          type={filament.type}
          color={filament.color}
          qty={filament.qty}
          onClick={() => {
            showModal(filament.id);
          }}
          onDelete={() => {
            deleteFilament(filament.id);
          }}
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

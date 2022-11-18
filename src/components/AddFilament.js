import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddFilament = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div className="container">
      <h1 className="heading">Add Filament</h1>
      <form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            {...register("name", { required: true, maxLength: 25 })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            {...register("type", { required: true, maxLength: 255 })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            {...register("color", { required: true, maxLength: 255 })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Qty</Form.Label>
          <Form.Control
            type="integer"
            {...register("qty", { required: true, maxLength: 255 })}
          />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Button variant="primary">Save</Button>
        </Form.Group>
      </form>
    </div>
  );
};

export default AddFilament;

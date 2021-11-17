import React from "react";
import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const FormInput = () => {
  const [formValue, setformValue] = useState({
    description: "",
    author: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formInputData = new FormData();
    formInputData.append("description", formValue.description);
    formInputData.append("author", formValue.author);

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/api/v1/files",
        data: formInputData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(function (response) {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className="d-flex justify-content-center my-5">
      <Form className="w-50" onSubmit={handleSubmit}>
        <Form.Group className="my-3">
          <Form.Control
            type="text"
            name="description"
            placeholder="Description"
            value={formValue.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Control
            type="text"
            name="author"
            placeholder="Author"
            value={formValue.author}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="col text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormInput;

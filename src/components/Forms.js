import React from 'react';
import { useState } from "react";
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



export default function Forms() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (


    <Form noValidate validated={validated} onSubmit={handleSubmit} className="pt-4">
      <h2 className="text-center p-4">Додати фотографію</h2>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="mail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.File
          className="position-relative"
          required
          name="file"
          label="File"
          accept="image/*"
          // onChange={handleChange}
          // isInvalid={!!errors.file}
          // feedback={errors.file}
          id="validationFormik107"
          feedbackTooltip
        />
      </Form.Group>

      <Form.Group controlId="teg">
    <Form.Label>Choose tag</Form.Label>
    <Form.Control as="select" multiple>
      <option>#casle</option>
      <option>#regalia</option>
      <option>#city</option>
      <option>#nature</option>
      <option>#buildings</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="Description">
    <Form.Label>Comment to pic</Form.Label>
    <Form.Control as="textarea" rows={4} />
  </Form.Group>

      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}



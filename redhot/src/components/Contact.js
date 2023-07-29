import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <div className="contact">
      <div className="inner-contact container">
        <div className="inner-contact-box container" id="inner-contact-box_1">
          <h5>_ Contact Us _ </h5>
          <h1>Feel free to contact with us for any kind of query.</h1>
          <p>
            Thank you for your interest in hiring Red hot property Service
            Company. We consider communication with the customer
          </p>
          <div className="contact_details">
            <div>
              <h3>Phone Number</h3>
              <p>Head Office:(210)123 451</p>
              <p>Help line:44 321</p>
            </div>
            <div>
              <h3>Mail Address</h3>
              <p>mohit@gmail.com</p>
              <p>info@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="inner-contact-box" id="inner-contact-box_2">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit" className="button">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

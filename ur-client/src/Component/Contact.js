import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { API } from "../config";
import { Container, Row, Col, Alert, Form, Button } from "react-bootstrap";
import phone from './pic/phone (2).png'
import email from './pic/email (2).png'
import headquarter from './pic/headquarter (1).png'
import headoffice from './pic/headquarter.png'

const createcontactus = (values) => {
  // console.log(values);

  return fetch(`${API}/ur/contact`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const clickSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    // console.log("submitted");
    createcontactus(values).then((data) => {
      if (data.error) {
        setError(true);
        console.log("error in front");
      } else {
        // setError("");
        // setSuccess(true);
        setSuccess(true);
        console.log("success in front");
      }
    });
  };
  const showError = () => {
    if (error) {
      return <h3 className="bg-danger rounded">There is ERROR!</h3>;
    }
  };
  const showSuccess = () => {
    if (success) {
      return (
        <h3 className="bg-success rounded">
          Your Comment has been sent.Thank You!
        </h3>
      );
    }
  };
  const handleChange = (data) => (e) => {
    const value = e.target.value;
    setError(false);
    setSuccess(false);
    setValues({ ...values, [data]: value });
  };
  const formdata = () => {
    return (
      <Alert style={{ backgroundColor: "rgb(240 251 244)", paddingTop: "20px" }}>
        <Container><h1 style={{ color: "green",textAlign:'left',fontWeight: '900' }}>Drop An Enquiry</h1>
        </Container>
        <Container>
          <Form
            style={{ textAlign: "left", color: "green" }}
            onSubmit={clickSubmit}
          >
            <Form.Group controlId="form.Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                style={{ width: "40vw" }}
                type="text"
                placeholder="Enter name"
                onChange={handleChange("name")}
              />
            </Form.Group>
            <Form.Group controlId="form.Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                style={{ width: "40vw" }}
                type="email"
                placeholder="name@example.com"
                onChange={handleChange("email")}
              />
            </Form.Group>
            <Form.Group controlId="form.Textarea">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                style={{ width: "40vw" }}
                as="textarea"
                rows={3}
                onChange={handleChange("content")}
              />
            </Form.Group>
            <Button
              style={{ marginTop: "10px" }}
              variant="primary"
              class="btn btn-success btn-block"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </Alert>
    );
  };
  return (
    <div>
        <Container fluid  class="touch" style={{marginTop:'40px',padding: '20px', marginBottom:'150px',}}>
      <h1 style={{fontWeight: 'bold',paddingBottom: '40px'}}>Get In Touch<hr style={{width: "80%",marginLeft: '10%'}}></hr></h1>
      
    <Row>
      <Col style={{paddingTop:'20px', borderRadius:'1px solid green'}}><img src={phone}></img>
      <h4>Get Free Farming Advisory</h4>
      <h5>7991106305</h5></Col>
      <Col style={{paddingTop:'30px',borderRadius:'1px solid black'}}><img src={email}></img>
      <h4>Email Us</h4>
      <h5>contact@urbanreach.in</h5></Col>
    </Row>
    </Container>
    <Alert style={{backgroundColor: 'rgb(240 251 240'}}>
  <Container style={{marginTop:'20px'}}>
  <Row>
    <Col style={{}}><img width='150px' style={{marginTop:'20px'}} src={headquarter} alt="" srcset="" />
    </Col>
    <Col style={{ height:'200px',paddingTop:'30px',}}><h3>Head Office</h3><p>Zero mile, Ara, Bihar-802301</p>
   </Col>
   <Col style={{}}><img  style={{marginTop:'20px'}} width='150px' src={headoffice} alt="" srcset="" />
    </Col>
    <Col style={{ height:'200px',paddingTop:'30px',}}><h3>Regional Office</h3><p>Zero Mile, Ara, Bihar-802301</p>
   </Col>
  </Row>
  </Container>
</Alert>

    
      {showSuccess()}
      {showError()}
      {formdata()}
      <Footer />
    </div>
  );
};

export default Contact;

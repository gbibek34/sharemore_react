import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import userimg from "../assets/images/login.png";
import readingimg from "../assets/images/reading.svg";

const Login = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <Row>
          <Col lg={4} md={12} sm={12} className="text-center mt-5 p-3">
            <img src={userimg} alt="" className="login-img mb-5" />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Link className="btn btn-block btn-wide" type="Submit" to="/">
                Submit
              </Link>
            </Form>
          </Col>
          <Col lg={8} md={0} sm={0}>
            <img
              className="mx-5 login-illustration"
              style={{ width: 750 }}
              src={readingimg}
              alt="Reading"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;

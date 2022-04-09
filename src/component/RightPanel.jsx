import React, { useState } from "react";
import {
  Card,
  Form,
  Button,
  Col,
  Row,
  Container,
  Tabs,
  Tab,
} from "react-bootstrap";

function RightPanel() {
  const [key, setKey] = useState("home");
  return (
    <Card className="">
      <Tabs
        className="bg-light"
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="1. Registration Details">
          {" "}
          {/* <Card.Header className="fs-2"></Card.Header> */}
          <Card.Body>
            <Form className="mb-4">
              <Container>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    <Form.Group
                      controlId="registrationFormEmail"
                      className="inner-addon right-addon"
                    >
                      <Form.Label className="text-muted">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="mb-3"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                      {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} lg={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="registrationFormFname"
                    >
                      <Form.Label className="text-muted">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={12} lg={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="registrationFormLname"
                    >
                      <Form.Label className="text-muted">Las Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} lg={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="registrationFormGender"
                    >
                      <Form.Label className="text-muted">Gender</Form.Label>
                      <Form.Control type="text" placeholder="Enter Gender" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={12} lg={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="registrationFormCountry"
                    >
                      <Form.Label className="text-muted">Country</Form.Label>
                      <Form.Control type="text" placeholder="Enter Country" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    <p className="text-muted">Terms and Conditions *</p>
                    <p>Consent</p>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col xs={2} md={2} lg={2} className="checkbox-inline">
                    <div className="form-check d-flex justify-content-start mb-4 pb-3">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        value=""
                        id="form2Example3c"
                      />
                    </div>
                  </Col>
                  <Col>
                    <label className="form-check-label ">
                      By using our offerings and services, you are agreeing to
                      the{" "}
                      <a href="#!" className="">
                        Terms of Services{" "}
                      </a>
                      and{" "}
                      <a href="#!" className="">
                        License Agreement{" "}
                      </a>
                      and understand that your acces will be subject to the
                      terms and conditions and
                      <a href="#!" className="">
                        {" "}
                        Privacy Notice{" "}
                      </a>
                      conatined therein.
                      <a href="#!" className="">
                        {" "}
                        Terms and Conditions{" "}
                      </a>
                      of your site.
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      variant="secondary"
                      type="submit"
                      disabled
                      className="px-4"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Card.Body>
        </Tab>
      </Tabs>
    </Card>
  );
}

export default RightPanel;

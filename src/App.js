import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftPanel from "./component/LeftPanel";
import RightPanel from "./component/RightPanel";
import Test from "./component/Test";

function App() {
  return (
    <Container fluid className="App">
      <Row xs={12} md={12} lg={12}>
        <Col>
          <Container fluid className="main-content h-100 d-flex">
            <Row className="justify-content-center align-items-center">
              <Col xs={12} md={5} lg={5} className="mx-auto my-auto">
                <LeftPanel />
              </Col>
              <Col xs={12} md={7} lg={7} className="px-5">
                <RightPanel className="mx-auto my-auto" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

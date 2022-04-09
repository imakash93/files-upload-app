import React from "react";
import { Card, Container, Row, Col, Table } from "react-bootstrap";

function LeftPanel() {
  return (
    <Card className="bg-light left-card-border">
      <Card.Body>
        <Card.Subtitle className="mb-4 text-muted">Hi ,</Card.Subtitle>
        <Card.Title className="">Welcome To</Card.Title>
        <Card.Text className="mb-2  fs-1">FilesUpload</Card.Text>
        <hr style={{ width: "30%" }} />
        <Container fluid>
          <Row className="mb-2 mt-5 text-muted">
            <Col md={12}>
              <Table className="table-borderless">
                <thead>
                  <tr>
                    <th> Questions count:</th>
                    <th>Section count:</th>
                    <th>Test Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 28 Questions</td>
                    <td> 5 Sections</td>
                    <td> 6 minutes</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default LeftPanel;

import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img2 from './Images/second.jpg'
import './style.css'

const View = () => {
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card className="cc">
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default View;

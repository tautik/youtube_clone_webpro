import React from "react";
import { Card, Col, Button } from "react-bootstrap";
const CustomTile = ({ title, uploadedAgo, uploadedBy, image, views }) => {
  return (
    <Col>
      <Card bg="dark">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          {/* redirect to the video */}
          <Card.Link
            href="#"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            {title}
          </Card.Link>
          <br />
          {/* redirect to the youtube channel */}
          <Card.Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            href="#"
          >
            {uploadedBy}
          </Card.Link>
          <Card.Text>
            {uploadedAgo} | {views} Views
          </Card.Text>
          <Button variant="danger">Subscribe</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomTile;

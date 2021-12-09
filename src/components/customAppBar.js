import { height } from "dom-helpers";
import React, { PureComponent } from "react";

import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const CustomAppBar = ({ label, onSearch }) => {
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <img src="../logo.svg" alt="logo" height={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search"
              aria-label="search on ta youtube"
              aria-describedby="basic-addon2"
              onChange={onSearch}
            />
            <Button
              style={{
                backgroundColor: "black",
                border: "black",
                marginRight: "20px",
              }}
            >
              <img src="../search-3-24.png" alt="" />
            </Button>
            <Button variant="outline-light" href="/license">
              License
            </Button>
            <img
              src="../pfp.png"
              alt=""
              style={{
                height: "40px",
                marginRight: "20px",
                marginLeft: "10px",
                borderRadius: "46%",
              }}
            />
          </InputGroup>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomAppBar;

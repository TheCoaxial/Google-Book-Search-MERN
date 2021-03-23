import React from "react";
import { Col, Row, Container } from "../components/Grid";
import BookList from "../components/BookList";


const Saved = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-8">
          <BookList />
        </Col>
      </Row>
    </Container>
  );
};

export default Saved;
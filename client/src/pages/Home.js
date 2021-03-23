import React from "react";
import { Col, Row, Container } from "../components/Grid";
import SearchField from "../components/searchField";


const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-8">
          <SearchField />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
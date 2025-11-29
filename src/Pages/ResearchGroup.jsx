import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Team2 from '../assets/Team2.jpg';

function ResearchGroup() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow-sm" bg="light">
            <Card.Img variant="top" src={Team2} />
            <Card.Body>
              <Card.Title>Research Group</Card.Title>
              <Card.Text>
                Team responsible for analysis, data collection, and experiments.
              </Card.Text>
              <Link to="/">
                <Button variant="primary">Back to Home</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ResearchGroup;

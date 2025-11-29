import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Team1 from '../assets/Team1.jpg';

function DevelopmentTeam() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow-sm" bg="light">
            <Card.Img variant="top" src={Team1} />
            <Card.Body>
              <Card.Title>Development Team</Card.Title>
              <Card.Text>
                A group of skilled developers working on core system features.
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

export default DevelopmentTeam;
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Team3 from '../assets/Team3.jpg';

function MarketingTeam() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow-sm" bg="light">
            <Card.Img variant="top" src={Team3} />
            <Card.Body>
              <Card.Title>Marketing Team</Card.Title>
              <Card.Text>
                Specialists who manage branding, communication, and strategy.
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

export default MarketingTeam;

import { useParams, Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

import Team1 from "../assets/Team1.jpg";
import Team2 from "../assets/Team2.jpg";
import Team3 from "../assets/Team3.jpg";

function TeamPage() {
  const { id } = useParams();

  const teams = {
    development: {
      title: "Development Team",
      text: "A group of skilled developers working on core system features.",
      img: Team1,
    },
    research: {
      title: "Research Group",
      text: "Team responsible for analysis, data collection, and experiments.",
      img: Team2,
    },
    marketing: {
      title: "Marketing Team",
      text: "Specialists who manage branding, communication, and strategy.",
      img: Team3,
    },
  };

  const team = teams[id];

  if (!team) {
    return (
      <Container style={{ marginTop: "100px" }}>
        <h3 className="text-center text-danger">Team not found</h3>
        <div className="text-center mt-4">
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow-sm" bg="light">
            <Card.Img variant="top" src={team.img} />
            <Card.Body>
              <Card.Title>{team.title}</Card.Title>
              <Card.Text>{team.text}</Card.Text>

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

export default TeamPage;

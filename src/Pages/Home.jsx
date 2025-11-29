import React, { Component } from 'react';
import CarouselBoxHk from "../components/CarouselBoxHk";
import { Link } from "react-router-dom";

import Team1 from '../assets/Team1.jpg';
import Team2 from '../assets/Team2.jpg';
import Team3 from '../assets/Team3.jpg';

import { Card, Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <>
        <CarouselBoxHk />

        <Container className="mt-5">
          <h2 className="text-center m-4">Our Team</h2>

          <div className="row justify-content-center">

            <div className="col-md-4">
              <Card className="m-4 text-center shadow-sm" bg="light">
                <Card.Img variant="top" src={Team1} />
                <Card.Body>
                  <Card.Title>Development Team</Card.Title>
                  <Card.Text>
                    A group of skilled developers working on core system features.
                  </Card.Text>
                  <Link to="/team/development" className="btn btn-primary">
                    Learn more
                  </Link>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4">
              <Card className="m-4 text-center shadow-sm" bg="light">
                <Card.Img variant="top" src={Team2} />
                <Card.Body>
                  <Card.Title>Research Group</Card.Title>
                  <Card.Text>
                    Team responsible for analysis, data collection, and experiments.
                  </Card.Text>
                  <Link to="/team/research" className="btn btn-primary">
                    Learn more
                  </Link>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4">
              <Card className="m-4 text-center shadow-sm" bg="light">
                <Card.Img variant="top" src={Team3} />
                <Card.Body>
                  <Card.Title>Marketing Team</Card.Title>
                  <Card.Text>
                    Specialists who manage branding, communication, and strategy.
                  </Card.Text>
                  <Link to="/team/marketing" className="btn btn-primary">
                    Learn more
                  </Link>
                </Card.Body>
              </Card>
            </div>

          </div>
        </Container>
      </>
    );
  }
}

export default Home;

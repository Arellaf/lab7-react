import React, { Component } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

import DesignImg from "../assets/DesignImg.jpeg";
import TeamImg from "../assets/TeamImg.jpeg";
import ProgramImg from "../assets/ProgramImg.jpg";
import FrameworksImg from "../assets/FrameworksImg.jpg";
import LibraryImg from "../assets/LibraryImg.jpeg";

export class About extends Component {
  render() {
    return (
      <Container className="mt-5 p-4 rounded-4 shadow-lg">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav
                variant="pills"
                className="flex-column mt-2 rounded-4 shadow-sm"
                style={{ background: "#e9f2ff" }}
              >
                <Nav.Item>
                  <Nav.Link eventKey="first" className="fw-bold">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="fw-bold">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="fw-bold">Program</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" className="fw-bold">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth" className="fw-bold">Library</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content className="p-4 rounded-4 shadow-sm" style={{ background: "#ffffff", border: "1px solid #d3d3d3" }}>

                <Tab.Pane eventKey="first">
                  <h3 className="mb-3 text-primary fw-bold">Design</h3>
                  <img className="d-block w-100 rounded-4 mb-3" src={DesignImg} alt="Design section" />
                  <p className="fs-5">
                    Design focuses on creating clean, modern, and user-friendly interfaces.
                    The main goal is to make the product visually appealing and easy to use.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <h3 className="mb-3 text-primary fw-bold">Team</h3>
                  <img className="d-block w-100 rounded-4 mb-3" src={TeamImg} alt="Team section" style={{ maxHeight: "500px" }} />
                  <p className="fs-5">
                    Our team consists of dedicated specialists who work together to deliver
                    high-quality solutions and support each other throughout the development process.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <h3 className="mb-3 text-primary fw-bold">Program</h3>
                  <img className="d-block w-100 rounded-4 mb-3" src={ProgramImg} alt="Program section" />
                  <p className="fs-5">
                    The program includes clear structure, logical planning, and step-by-step
                    implementation to achieve stable and reliable results.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <h3 className="mb-3 text-primary fw-bold">Frameworks</h3>
                  <img className="d-block w-100 rounded-4 mb-3" src={FrameworksImg} alt="Frameworks section" />
                  <p className="fs-5">
                    Frameworks help speed up development, provide ready-made solutions,
                    and ensure consistent architecture within the project.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <h3 className="mb-3 text-primary fw-bold">Library</h3>
                  <img className="d-block w-100 rounded-4 mb-3" src={LibraryImg} alt="Library section" />
                  <p className="fs-5">
                    Libraries offer additional tools and components that simplify coding
                    and enhance the functionality of the application.
                  </p>
                </Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default About;
import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";

import ArchitectureImg from '../assets/ArchitectureImg.jpg';
import ChurchImg from '../assets/ChurchImg.jpg';
import HousesImg from '../assets/HousesImg.jpg';
import RiverImg from '../assets/RiverImg.jpg';

class CarouselBoxHk extends Component {

  render() {
    return (
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ArchitectureImg}
            alt="Ocean"
            style={{ maxHeight: "100vh", objectFit: "cover", objectPosition: "center" }} />
          <Carousel.Caption>
            <h3>Architecture image</h3>
            <p>A cluster of brick houses, creating a warm and charming Italian-like atmosphere.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ChurchImg}
            alt="Mushrooms"
            style={{ maxHeight: "100vh", objectFit: "cover", objectPosition: "center" }} />
          <Carousel.Caption>
            <h3>Church image</h3>
            <p>A beautiful church interior with decorated arches, golden designs, and colorful frescoes.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={HousesImg}
            alt="Mushrooms"
            style={{ maxHeight: "100vh", objectFit: "cover", objectPosition: "50% 80%" }} />
          <Carousel.Caption>
            <h3>Houses image</h3>
            <p>A nice view of a white church and houses surrounded by trees.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={RiverImg}
            alt="Mushrooms"
            style={{ maxHeight: "100vh", objectFit: "cover", objectPosition: "center" }} />
          <Carousel.Caption>
            <h3>River image</h3>
            <p>A beautiful river flowing through nature, with a picturesque house in the background creating a stunning view.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    );
  }
}
export default CarouselBoxHk;
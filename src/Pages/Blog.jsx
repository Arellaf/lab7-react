import React, { Component } from "react";
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";

import PostImg1 from "../assets/PostImg1.png";

class Blog extends Component {
  render() {
    return (
      <Container className="mt-5 rounded-4 shadow-lg p-4">
        <Row>
          <Col md="9">
            <div className="d-flex align-items-center me-5 mb-4">
              <div className="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  className="mr-3 rounded-3 shadow-sm"
                  src={PostImg1}
                  alt="post"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="text-primary">Що таке React і чому він популярний?</h5>
                <p>React - це JavaScript-бібліотека для створення інтерфейсів, яку розробила компанія Meta.
                  Її головна перевага - компонентний підхід, що дозволяє розбивати інтерфейс на незалежні частини та легко їх перевикористовувати.
                  Завдяки цьому React став стандартом у сучасній фронтенд-розробці, забезпечуючи швидкість, масштабованість і зручність роботи з UI.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center me-5 mb-4">
              <div className="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  className="mr-3 rounded-3 shadow-sm"
                  src={PostImg1}
                  alt="post"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="text-primary">Переваги використання Hooks</h5>
                <p>
                  Hooks були додані у React 16.8 та дозволили працювати зі станом і життєвими циклами без класів.
                  Вони спрощують логіку компонентів, роблять код чистішим та легшим у підтримці.
                  Найпопулярніші - useState, useEffect і useContext - допомагають керувати станом, виконувати побічні дії та працювати зі сховищами даних.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center me-5 mb-4">
              <div className="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  className="mr-3 rounded-3 shadow-sm"
                  src={PostImg1}
                  alt="post"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="text-primary">Цікавий факт про JavaScript</h5>
                <p>
                  У JavaScript оператор == може поводитися настільки непередбачувано, що вираз [] == ![] повертає true.
                  Це стається через заплутані правила приведення типів: порожній масив перетворюється у порожній рядок "", а ![] - у false.
                  Через такі дивні та неочевидні випадки JavaScript вважається мовою з одним із найскладніших механізмів неявного перетворення типів -
                  і саме тому багато розробників переходять на TypeScript, який додає сувору типізацію та дозволяє уникати більшості подібних помилок.
                </p>
              </div>
            </div>
          </Col>

          <Col md="3">
            <h5 className="text-center mt-5 text-primary">Категорії</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>категорія 1</ListGroup.Item>
                <ListGroup.Item>категорія 2</ListGroup.Item>
                <ListGroup.Item>категорія 3</ListGroup.Item>
                <ListGroup.Item>категорія 4</ListGroup.Item>
                <ListGroup.Item>категорія 5</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3 bg-light">
              <Card.Body>
                <Card.Title className="text-center text-primary">Slide widget</Card.Title>
                <Card.Text className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Blog;

import { useParams, Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

import PostImg1 from "../assets/PostImg1.png";
import PostImg2 from "../assets/PostImg2.png";
import PostImg3 from "../assets/PostImg3.png";

function PostPage() {
  const { id } = useParams();

  const posts = {
    "react-intro": {
      title: "Що таке React?",
      text: `React - це JavaScript-бібліотека для створення інтерфейсів, яку розробила компанія Meta.Її головна перевага - компонентний підхід, що дозволяє розбивати інтерфейс на незалежні частини та легко їх перевикористовувати.Завдяки цьому React став стандартом у сучасній фронтенд-розробці, забезпечуючи швидкість, масштабованість і зручність роботи з UI.`,
      img: PostImg1,
    },

    "hooks": {
      title: "Переваги використання Hooks",
      text: ` Hooks були додані у React 16.8 та дозволили працювати зі станом і життєвими циклами без класів.Вони спрощують логіку компонентів, роблять код чистішим та легшим у підтримці.Найпопулярніші - useState, useEffect і useContext - допомагають керувати станом, виконувати побічні дії та працювати зі сховищами даних.`,
      img: PostImg2,
    },

    "js-fact": {
      title: "Цікавий факт про JavaScript",
      text: `У JavaScript оператор == може поводитися настільки непередбачувано, що вираз [] == ![] повертає true.Це стається через заплутані правила приведення типів: порожній масив перетворюється у порожній рядок "", а ![] - у false.Через такі дивні та неочевидні випадки JavaScript вважається мовою з одним із найскладніших механізмів неявного перетворення типів - і саме тому багато розробників переходять на TypeScript, який додає сувору типізацію та дозволяє уникати більшості подібних помилок.`,
      img: PostImg3,
    }
  };

  const post = posts[id];

  if (!post) {
    return (
      <Container style={{ marginTop: "100px" }}>
        <h3 className="text-center text-danger">Пост не знайдено</h3>
        <div className="text-center mt-4">
          <Link to="/blog">
            <Button variant="primary">Назад до блогу</Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: "100px", maxHeight: "500px"}}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow-sm" bg="light">
            <Card.Img variant="top" src={post.img} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text style={{ whiteSpace: "pre-line" }}>
                {post.text}
              </Card.Text>

              <Link to="/blog">
                <Button variant="primary">Повернутися назад</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PostPage;

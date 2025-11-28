import { Form, Button } from "react-bootstrap";
import { useContactValidation } from "../hooks/useContactValidation";

export default function Contacts() {
  const {
    email,
    message,
    emailDirty,
    messageDirty,
    emailError,
    messageError,
    formValid,
    emailHandler,
    messageHandler,
    blurHandler
  } = useContactValidation();


  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", marginTop: "60px" }}>
      <h1 className="text-center ">Contacts</h1>

      <Form className=" rounded-4 shadow-lg p-4">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>

          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}

          <Form.Control
            onChange={emailHandler}
            onBlur={blurHandler}
            name="email"
            type="email"
            value={email}
            placeholder="Введіть email"
            className="mt-2"
          />
        </Form.Group>

        <Form.Group controlId="formBasicMessage" className="mt-3">
          <Form.Label>Відгук</Form.Label>

          {messageDirty && messageError && (
            <div style={{ color: "red" }}>{messageError}</div>
          )}

          <Form.Control
            onChange={messageHandler}
            onBlur={blurHandler}
            name="message"
            as="textarea"
            rows={4}
            value={message}
            placeholder="Ваш відгук"
          />
        </Form.Group>

        <Button
          disabled={!formValid}
          variant="primary"
          type="submit"
          className="mt-3"
        >
          Надіслати
        </Button>
      </Form>
    </div>
  );
}

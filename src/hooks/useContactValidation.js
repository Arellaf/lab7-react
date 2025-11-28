import { useState, useEffect } from "react";

export const useContactValidation = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [messageDirty, setMessageDirty] = useState(false);

  const [emailError, setEmailError] = useState("Email не може бути порожнім");
  const [messageError, setMessageError] = useState("Відгук не може бути порожнім");

  const [formValid, setFormValid] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);

    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некоректний email");
    } else {
      setEmailError("");
    }
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);

    if (e.target.value.length < 10) {
      setMessageError("Відгук повинен містити мінімум 10 символів");
    } else {
      setMessageError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "message":
        setMessageDirty(true);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (emailError || messageError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, messageError]);

  return {
    email,
    message,
    emailDirty,
    messageDirty,
    emailError,
    messageError,
    formValid,
    emailHandler,
    messageHandler,
    blurHandler,
  };
};

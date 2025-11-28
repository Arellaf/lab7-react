import { useState, useEffect } from "react";

export const useValidation = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const [emailError, setEmailError] = useState('Email не може бути порожнім');
    const [passwordError, setPasswordError] = useState('Пароль не може бути порожнім');

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

    const passwordHandler = (e) => {
        setPassword(e.target.value);

        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError("Пароль повинен мати 3–8 символів");
            if (!e.target.value) setPasswordError("Пароль не може бути порожнім");
        } else {
            setPasswordError("");
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email":
                setEmailDirty(true);
                break;
            case "password":
                setPasswordDirty(true);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    return {
        email,
        password,
        emailDirty,
        passwordDirty,
        emailError,
        passwordError,
        formValid,
        emailHandler,
        passwordHandler,
        blurHandler
    };
};

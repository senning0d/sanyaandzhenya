import {Button, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import axios, {post} from "axios";
import {Routes, Route, Link } from 'react-router-dom'

import {Homepage} from './Homepage.jsx';

function FormGroupExample() {
    const [fullName, setFullName] = useState('')
    const [phone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState('');
    const [validated, setValidated] = useState(false);

    const telephone = async () => {
        // Получать пользователя по телефону и паролю
        const {data} = await axios.get('http://localhost:3001/users');
        setUsers(data);
    }

    useEffect(()=>{
        telephone();
    }, [])


    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        const {data} = await axios.post('http://localhost:3001/users', {
            "fullName": fullName,
            "telephone": phone,
            "email": email,
            "password": password,
        });
        alert('Пользователь добавлен')
    };

    return (
        <div className="App">
            {JSON.stringify(users)}
            <Header title={"Регистрация пользователя"}/>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className={"reg"}>
                <Form.Group className={"imp col-3 mt-3"} controlId="validationCustom01">
                    <Form.Control
                        required
                        type="text"
                        placeholder={"ФИО"}
                        onChange={event => setFullName(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Заполните ФИО
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className={"imp col-3 mt-3"} controlId="validationCustom02">
                    <Form.Control
                        required
                        type="tel"
                        placeholder={"Телефон"}
                        onChange={event => setTelephone(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Заполните телефон
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className={"imp col-3 mt-3"} controlId="validationCustom03">
                    <Form.Control
                        required
                        type="email"
                        placeholder={"Почта"}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Заполните почту
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className={"imp col-3 mt-3"} controlId="validationCustom04">
                    <Form.Control
                        required
                        type="password"
                        placeholder={"Пароль"}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Заполните пароль
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className={"imp col-3 mt-3"} controlId="validationCustom05">
                    <Form.Control
                        required
                        type="password"
                        placeholder={"Повторите пароль"}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Заполните повторение пароля
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className={"imp col-3 mt-3"}>
                    <Form.Check
                        required
                        type="checkbox"
                        label="Согласие на обработку персональных данных"
                        requiredtype="checkbox"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button className={"col-3 mt-3"} type={"submit"}>добавить</Button>
            </Form>
            <Link to="/">ДАМОООООЙ</Link>
        </div>
    );
}
export default FormGroupExample;
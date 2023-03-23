import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Register = props => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const onChangeUsername = e => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChangeEmail = e => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
    }

    const register = () => {
        props.register({ username: username, email: email, password: password });
        props.history.push('/');
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={onChangeUsername}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter email"
                        value={email}
                        onChange={onChangeEmail}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={onChangePassword}
                    />
                </Form.Group>
                <Button variant="primary" onClick={register}>
                    Register
                </Button>
            </Form>
        </Container>
    );
}
export default Register;
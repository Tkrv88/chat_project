import React from 'react'
import axios from 'axios'
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatList from './components/ChatList';
import Login from './components/login';
import Register from './components/register';
import chatService from './services/chatService';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';

function App() {

    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [error, setError] = React.useState('');

    async function login(user = null) { // default user to null
        chatService.auth_token_login_create(user)
            .then(response => {
                setToken(response.data.auth_token);
                setUser(user.username);
                localStorage.setItem('token', response.data.auth_token);
                localStorage.setItem('user', user.username);
                setError('');
            })
            .catch(e => {
                console.log('login', e);
                setError(e.toString());
            });
    }

    async function logout() {
        setUser(null);
    }

    async function register(user = null) { // default user to null
        chatService.auth_users_create(user)
            .then(response => {
                setToken(response.data.auth_token);
                setUser(user.email);
                setUser(user.username);
                localStorage.setItem('token', response.data.auth_token);
                localStorage.setItem('user', user.username);
                localStorage.setItem('email', user.email);
            })
            .catch(e => {
                console.log(e);
                setError(e.toString());
            })
    }

    return (
        <div className="App">
            <Navbar bg="primary" variant="dark">
                <div className="container-fluid">
                    <Navbar.Brand>Test system</Navbar.Brand>
                    <Nav className="me-auto">
                        <Container>
                            <Link class="nav-link" to={"/chatService"}>Chats</Link>
                            {user ? (
                                <Link class="nav-link" onClick={logout}>Logout ({user})</Link>
                            ) : (
                                <>
                                    <Link class="nav-link" to={"/login"}>Login</Link>
                                    <Link class="nav-link" to={"/register"}>Register</Link>
                                </>
                            )}
                        </Container>
                    </Nav>
                </div>
            </Navbar>

            <div className="container mt-4">
                <Switch>
                    <Route exact path={["/", "/chatService"]} render={(props) =>
                        <ChatList {...props} token={token} />
                    }>
                    </Route>
                    <Route path="/login" render={(props) =>
                        <Login {...props} login={login} />
                    }>
                    </Route>
                    <Route path="/register" render={(props) =>
                        <Register {...props} signup={register} />
                    }>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;

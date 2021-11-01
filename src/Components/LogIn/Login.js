import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import google from '../img/google.png';
import github from '../img/github.png';
import Fade from 'react-reveal/Fade';
import swal from 'sweetalert';
import "./Login.css";

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const {
        signInUsingGoogle,
        signInUsingGithub,
        handleSignIn,
        getPassword,
        getEmail,
        setError,
        error,
        setUser,
        setIsLoading } = useAuth();
    
    const handleSignInWithGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                history.push(redirect_uri)
                setError("");
                swal("Good job!", "Successfully LogIn", "success");
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => setIsLoading(false));
    }
    
    const handleSignInWithGithub = (e) => {
        signInUsingGithub()
        .then(result => {
            setUser(result.user);
                history.push(redirect_uri);
                setError('');
                swal("Good job!", "Successfully LogIn", "success");
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
            
        e.preventDefault();
    }
    
    const handleSignInUsingEmail = (e) => {
        e.preventDefault()
        handleSignIn()
            .then(() => {
                history.push(redirect_uri);
                alert('successfully login');
                setError('');
                swal("Good job!", "Successfully LogIn", "success");
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <div className="container py-5 my-5">
            <Row xs={1} md={2} className="g-4 my-4 justify-content-around">
                <Col className="login-border">
                    <Fade right>
                        <div className="login-logo mx-auto mt-3">
                            <i className="fas fa-user-alt"></i>
                        </div>

                        <h2 className="fw-bolder text-center mt-4">Log In</h2>

                        <Form onSubmit={handleSignInUsingEmail} className="login-from mx-auto mt-5">
                            <Form.Group className="mb-3" controlId="formHorizontalEmail">
                                <Col>
                                    <Form.Control onBlur={getEmail} type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formHorizontalPassword">
                                <Col>
                                    <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <small className="text-danger">{error} </small>

                            <Form.Group className="text-center text-primary" controlId="formGridPassword">
                                <Form.Label className="forget">Forgotten password?</Form.Label>
                                <Link to="/signup"><span className="text-secondary d-block">New user?</span>
                                </Link>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Button type="submit" className="w-100 card-btn fw-bold rounded-0">Log in</Button>
                            </Form.Group>

                            <Form.Group className="my-3 text-center">
                                <Col className="sign-logo d-flex text-center">
                                    <button onClick={handleSignInWithGoogle} className="d-flex w-100 border-0 align-items-center justify-content-center color"><img className="login-icon" src={google} alt="" />
                                        <p className="m-0 ps-3">Sign In with Google</p></button>
                                </Col>
                                <Col className="sign-logo d-flex mt-3">
                                    <button onClick={handleSignInWithGithub}  className="d-flex w-100 border-0 align-items-center justify-content-center color"><img className="login-icon" src={github} alt="" />
                                        <p className="m-0 ps-3">Sign In with Github</p></button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Fade>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
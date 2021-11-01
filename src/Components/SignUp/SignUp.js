import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import Fade from 'react-reveal/Fade';

const SignUp = () => {
    const {
        getEmail,
        getPassword,
        handleRegistration,
        error,
        getName,
        setUserName,
        setError,
        password
    } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleSignUp = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setError('password should be at least 6 characters');
        } else {
            handleRegistration()
                .then(() => {
                    alert('successfully signed up');
                    setUserName();
                    history.push(redirect_uri);
                    setError("")
                })
                .catch(error => {
                    setError(error.message);
                })
        }
    }

    return (
        <div className="mx-4 my-5 pt-5">
            <Row xs={1} md={2} className="g-4 py-5  justify-content-around">
                <Col className="login-border">
                    <Fade right>
                        <div className="login-logo mx-auto mt-3">
                            <i className="fas fa-user-alt"></i>
                        </div>

                        <h2 className="fw-bolder text-center mt-4">Sign In</h2>

                        <Form onSubmit={handleSignUp} className="login-from mx-auto mt-5">
                            <Form.Group className="mb-3" controlId="formGriName">
                                <Form.Control required onBlur={getName} placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formHorizontalEmail">
                                <Col>
                                    <Form.Control required onBlur={getEmail} type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formHorizontalPassword">
                                <Col>
                                    <Form.Control required onBlur={getPassword} type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Control placeholder="Address" />
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col className="text-center">
                                    <p className="text-danger text-center">{error}</p>
                                    <Link to="/login" className="text-primary my-2 d-block">Already have an account?</Link>
                                    <Button type="submit" className="w-100 card-btn fw-bold rounded-0">Sign Up</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Fade>
                </Col>
            </Row>
        </div>
    );
};

export default SignUp;
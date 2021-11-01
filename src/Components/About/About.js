import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './About.css';
import about_banner from '../img/about_banner.png';

const About = () => {
    return (
        <div className="">
            <div className="about-section">
                <Fade top>
                    <div className="text-center">
                        <h1 className="fs-1 fw-bolder text-light mt-4">About Us</h1>
                        <h1 className="fs-2 fw-bolder text-light mt-4">GENERAL INFO</h1>
                    </div>
                </Fade>
            </div>
            <Container>
                <div className="mx-3 pt-5">
                    <Row xs={1} md={2}>
                        <Fade left>
                            <Col className="about-details">
                                <h4>Who We are</h4>
                                <h1>WHY CHOOSE US</h1>
                                <p>
                                    <small>Researching and organising your own holiday can be a stressful task. Let us do the work for you! By choosing us you can save both time and money. Our staff always ready to handle any unforeseen situations. Welcome to learn the world with us.</small>
                                </p>
                                <p><small>Ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.</small></p>
                                <button className="offer-btn mt-3">MORE DETAILS</button>
                            </Col>
                        </Fade>
                        <Fade right>    
                            <Col>
                                <img src={about_banner} className="img-fluid" alt="" />
                            </Col>
                        </Fade>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import logo_footer from '../img/logo_footer.png';

const Footer = () => {
    return (
        <div className="footer mt-5 pt-5">
            <Container>
                <Row md={4} xs={1} className="text-start footer-content">
                    <Col>
                        <h3 className="mb-4">INFO</h3>
                        <p><small>About Us</small></p>
                        <p><small>Travel</small></p>
                        <p><small>Gallery</small></p>
                        <p><small>Where to stay</small></p>
                        <p><small>Blog</small></p>
                    </Col>
                    <Col>
                        <h3 className="mb-4">BLOG</h3>
                        <p><small>Exploring Argentina and Chile by Bus</small></p>
                        <p><small>Spirit of Tasmania</small></p>
                        <p><small>How to Travel to Machu Picchu</small></p>
                    </Col>
                    <Col>
                        <h3 className="mb-4">CONTACTS</h3>
                        <p><small>Steven Bernson, Attorney at Law 1556 Broadway, New York, NY</small></p>
                        <p><small>info@example.com</small></p>
                        <p><small>1 800 123 4567</small></p>
                    </Col>
                    <Col>
                        <h3 className="mb-4">NEWSLETTER SIGN UP</h3>
                        <p><small>Subscribe now and receive a 20% discount on your next guidebook purchase</small></p>
                        <div className="sign-footer mt-4">
                            <input type="email" placeholder="your@email.com" />
                            <input type="submit" value="SIGN UP" />
                        </div>
                        <br/>
                        <input className="me-2" type="checkbox" />
                        <small>I agree that my submitted data is being collected and stored.</small>
                    </Col>
                </Row>

                <div className="footer-bottom">
                    <Row className="align-items-center">
                        <Col>
                            <div className="footer-bottom-details d-flex align-items-center">
                                <img src={logo_footer} alt="" />
                                <p><small><span style={{ color: '#f0b03e'}}>AncoraThemes</span> © 2021. All rights reserved.</small></p>
                            </div>
                        </Col>
                        <Col className="social-media">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
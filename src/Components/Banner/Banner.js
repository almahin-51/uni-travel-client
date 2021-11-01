import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './Banner.css';
import slider_1 from '../img/slides/slides_1.jpg';
import slider_2 from '../img/slides/slides_2.jpg';
import slider_3 from '../img/slides/slides_3.jpg';
import s_1 from '../img/s_1.jpg';
import s_2 from '../img/s_2.jpg';

const Banner = () => {
    return (
        <Row className="mb-5 w-100">
            <Col md={8} xs={12} className="p-0" >
                <Carousel controls={false} className="carousel-img">
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={slider_1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="slide-data text-start">
                            <h1>Inspiring, Beautiful,</h1>
                            <h1>Breathtaking</h1>
                            <p>Many people visit Peru to see the impressive Inca <br />
                                ruins of Machu Picchu, which are deservedly a <br />
                                stand-alone destination.
                            </p>

                            <h3 className="banner-special">Machu Picchu <span style={{ color: '#fff' }}>from</span></h3>
                            <h1 className="banner-price">$1200</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={slider_2}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="slide-data text-start">
                            <h1>Perfect your dream</h1>
                            <h1>Vacation</h1>
                            <p>Perched on a ridge high above the Sacred Valley and <br />
                                protected from the invading Spaniards, it survives to this<br />
                                day as the best-preserved relic of Inca civilization.
                            </p>

                            <h3 className="banner-special">Machu Picchu <span style={{ color: '#fff' }}>from</span></h3>
                            <h1 className="banner-price">$1200</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider_3}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="slide-data text-start">
                            <h1>Explore the</h1>
                            <h1>World</h1>
                            <p>Machu Picchu is one of those places that every<br />
                                single traveller should experience at least once in<br />
                                their lives.
                            </p>

                            <h3 className="banner-special">Machu Picchu <span style={{ color: '#fff' }}>from</span></h3>
                            <h1 className="banner-price">$1200</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col md={4} xs={12} className="p-0 text-start" >
                <div className="small-banner">
                    <img className="banner-img" src={s_1} alt="" />
                    <h2>Sit back and relax, <br />this is Peru
                    </h2>
                </div>
                <div className="small-banner">
                    <img className="banner-img" src={s_2} alt="" />
                    <h2>Courtyard of the Convento <br />Santo Domingo in Lima
                    </h2>
                </div>
            </Col>
        </Row>

    );
};

export default Banner;
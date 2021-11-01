import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Gallery.css';
import one from '../img/gallery/1.jpg';
import two from '../img/gallery/2.jpg';
import three from '../img/gallery/3.jpg';
import four from '../img/gallery/4.jpg';
import five from '../img/gallery/5.jpg';
import six from '../img/gallery/6.jpg';

const Gallery = () => {
    return (
        <div className="gallery w-100 mt-4">
            <Row md={2} xs={1} className="w-100">
                <Col className="gallery-details">
                    <div className="inner">
                        <h1>GALLERY</h1>
                        <p>Machu Picchu is one of those places that every single traveller should experience at least once in their lives.</p>
                    </div>
                </Col>
                <Col>
                    <div className="row g-2">
                        <div className="col-md-4">
                            <img src={one} className="img-fluid" alt="" />
                        </div>
                        <div className="col-4">
                            <img src={two} className="img-fluid" alt="" />
                        </div>
                        <div className="col-4">
                            <img src={three} className="img-fluid" alt="" />
                        </div>
                        <div className="col-4">
                            <img src={four} className="img-fluid" alt="" />
                        </div>
                        <div className="col-4">
                            <img src={five} className="img-fluid" alt="" />
                        </div>
                        <div className="col-4">
                            <img src={six} className="img-fluid" alt="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Gallery;
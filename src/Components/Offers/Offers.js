import React from 'react';
import { Col, Row } from 'react-bootstrap';
import offer from '../img/offer.png';
import './Offers.css';

const Offers = () => {
    return (
        <Row md={2} xs={1} className="text-start my-5 py-5 w-100">
            <Col>
                <img src={offer} className="img-fluid" alt="" />
            </Col>
            <Col className="offer-details mt-4">
                <h4>Machu Picchu</h4>
                <h1>LIMA TO CUSCO</h1>
                <p>Perfect for those looking to experience the region’s archaeological and cultural treasures in a short amount of time, this adventure includes a four-day trek along the Inca Trail.</p>
                <div className="d-flex travel-details justify-content-between">
                    <div className="part-one">
                        <h5>TRAVEL STYLE:</h5>
                        <h5>SERVICE LEVEL:</h5>
                        <h5>TRIP TYPE:</h5>
                    </div>
                    <div className="part-two">
                        <h5>ACTIVE</h5>
                        <h5>STANDARD</h5>
                        <h5>SMALL GROUP</h5>
                    </div>
                </div>
                <button className="offer-btn">BOOK YOUR TRAVEL</button>
            </Col>
        </Row>
    );
};

export default Offers;
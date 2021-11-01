import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const TourServices = ({ service }) => {
    const { _id, name, description, img } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer className="border-0 tour-btn">
                    <Link to={`/services/${_id}`}><button>LEARN MORE</button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default TourServices;
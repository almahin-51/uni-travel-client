import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TourServices from '../TourServices/TourServices';
import './Tours.css';

const Tours = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://haunted-ghoul-15306.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])


    return (
        <Container className="mt-5">
            <div className="tours-header py-5">
                <h4 className="mb-4">Tours</h4>
                <h1>OTHER DESTINATIONS</h1>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <TourServices key={service._id} service={service}></TourServices>)
                }
            </Row>
        </Container>
    );
};

export default Tours;
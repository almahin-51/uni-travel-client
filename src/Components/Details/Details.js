import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`https://haunted-ghoul-15306.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
            });
    }, []);

    const { _id, name, description, img, price } = details;
    
    return (
        <div>
            <Container className="py-5">
                <Row xs={1} md={2} className="my-5 d-flex justify-content-center align-items-center">
                    <Col className="">
                        <div className="mb-5">
                            <img width="100%" className=" details-img img-fluid" src={img} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <h2 style={{ fontWeight: "500", marginBottom: "20px" }}>{name}</h2>
                        <p>{description}</p>
                        <p>Price: ${price}</p>
                        
                        <Link to={`/user-info/${_id}`}> <button className="offer-btn">Get Offer</button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Details;
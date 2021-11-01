import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';

const UserInfo = () => {
    const [details, setDetails] = useState({});
    const { serviceId } = useParams();

    console.log(serviceId)

    useEffect(() => {
        fetch(`https://haunted-ghoul-15306.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
            });
    }, []);

    

    const { user } = useAuth();
    const [email, setEmail] = useState('');

    const countryRef = useRef();
    const cityRef = useRef();
    const phoneRef = useRef();

    const handleOrderPlace = ({ _id, ...rest }) => {
        const country = countryRef.current.value;
        const city = cityRef.current.value;
        const phone = phoneRef.current.value;
        const userName = user.displayName;


        const status = 'Pending';
        const detail = { ...rest, email, userName, country, status, city, phone };
        console.log(details);
        fetch('https://haunted-ghoul-15306.herokuapp.com/get_offer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(detail)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    document.getElementById('myForm').reset();
                    swal("Great!", "Your offer Added successfully", "success");
                }
            });
        
    }

    return (
        <div className="px-5 from-page mx-auto text-start">
            <Form id="myForm" onSubmit={(e) => handleOrderPlace(details, e.preventDefault())} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Your Name</Form.Label>
                    <Form.Control value={user?.displayName || ''} type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} value={user?.email || email} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control required ref={countryRef} type="text" placeholder="Country" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control required ref={cityRef} type="text" placeholder="City" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control required ref={phoneRef} type="number" placeholder="Phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <input className="form-control" type="submit" value="submit" />
                </Form.Group>
            </Form>
        </div>
    );
};

export default UserInfo;
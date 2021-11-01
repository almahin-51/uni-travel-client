import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './AddOffer.css';
import swal from 'sweetalert';


const AddOffer = () => {

    const { user } = useAuth();
    const [emailMenually, setEmailMenually] = useState('');

    const offerNameRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();

    const handleAddOffer = (e) => {
        e.preventDefault();
        const userName = user.displayName;
        const name = offerNameRef.current.value;
        const price = priceRef.current.value;
        const img = imageRef.current.value;
        const description = descriptionRef.current.value;


        const newOffer = { name, emailMenually, userName, price, img, description };

        fetch('https://haunted-ghoul-15306.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOffer)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data);
                    document.getElementById('addForm').reset();
                    swal("Great!", "Your offer Added successfully", "success");
                }
            })
        
        console.log()
    }

    return (
        <div className="px-5 from-page mx-auto text-start">
            <Form id="addForm" onSubmit={handleAddOffer}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Your Name</Form.Label>
                    <Form.Control value={user?.displayName || ''} type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required onChange={(e) => setEmailMenually(e.target.value)} value={user?.email || emailMenually} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Your Offer Name</Form.Label>
                    <Form.Control ref={offerNameRef} required placeholder="Your offer name" type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control required ref={priceRef} type="number" placeholder="Input number only" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control required ref={imageRef} type="text" placeholder="Input your offer Image URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control required ref={descriptionRef} placeholder="Description" as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <input className="form-control" type="submit" value="submit" />
                </Form.Group>
            </Form>
        </div>
    );
};

export default AddOffer;
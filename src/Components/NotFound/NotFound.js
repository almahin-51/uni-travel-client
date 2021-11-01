import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../img/notFound.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound">
            <img className="img-fluid" src={notfound} alt="" />
            <Link to="/home"><button className="fw-bold offer-btn">Back to Home</button></Link>
        </div>
    );
};

export default NotFound;
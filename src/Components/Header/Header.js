import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../img/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    const [toggle, setToggle] = useState(true);

    return (
        <div>
            <Navbar bg="light">
                <div className="container">
                    <Navbar.Brand className="logo-header" href="/home"><img className="img-fluid" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="header-link" id="basic-navbar-nav">
                        <Nav className="me-auto head-nav">
                            <Nav.Link as={NavLink}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red !important"
                                }} to="/home">HOME</Nav.Link>
                            <Nav.Link as={NavLink}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red !important"
                                }} to="/about">ABOUT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text id="contact" className="d-flex align-items-center">
                        <p className="d-flex align-items-center m-0"><small className="head-nav"><i className="fas fa-phone me-1 text-warning"></i> 1 800 123 4567</small></p>
                        {
                            user.photoURL || user.displayName ?
                                <div className="manage">
                                    <button className="ms-2 text-light btn">
                                        <NavLink className="offer-btn" activeStyle={{
                                            fontWeight: "bold",
                                            color: "red",
                                            backgroundColor: "#4b5664"
                                        }} to="/my_orders">My Orders</NavLink>
                                    </button>

                                    <button className="ms-2 text-light btn">
                                        <NavLink className="offer-btn" activeStyle={{
                                            fontWeight: "bold",
                                            color: "white",
                                            backgroundColor: "#4b5664"
                                        }} to="/manage_User">
                                            Manage All Order
                                        </NavLink></button>
                                    
                                    <button className="ms-2 text-light btn">
                                        <NavLink className="offer-btn" activeStyle={{
                                            fontWeight: "bold",
                                            color: "red",
                                            backgroundColor: "#4b5664"
                                        }} to="/addOffer">Add Offer</NavLink>
                                    </button>
                                </div>
                                :
                                ''
                        }

                        {
                            user.photoURL ?
                                <div className="logOut_toggle">
                                    <div className="logOut" onClick={() => setToggle(!toggle)}>
                                        <img className="rounded-circle m-0" src={user.photoURL} alt="" />
                                    </div>
                                    <div className={!toggle ? "drop_down" : "drop_down active"}>
                                        <Nav className="me-auto small">
                                            <Nav.Link as={NavLink}
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "red !important"
                                                }} to="/home">HOME</Nav.Link>
                                            <Nav.Link as={NavLink}
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "red !important"
                                                }} to="/about">ABOUT US</Nav.Link>
                                        </Nav>
                                        <h6 className="mt-2">Welcome</h6>
                                        <p>{user.displayName}</p>
                                        <button className="offer-btn" onClick={logOut}>LogOut</button>
                                    </div>
                                </div> :
                                <Link to="/login"><button className="ms-4 offer-btn">LOGIN / SIGNUP</button></Link>
                        }
                    </Navbar.Text>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;
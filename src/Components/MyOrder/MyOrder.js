import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [price, setPrice] = useState(0);
    const { user } = useAuth();

    const handleRemove = (id) => {
        swal({
            title: "Are you sure?",
            text: "you want to delete this offer?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("successfully deleted.", {
                        icon: "success",
                    });

                    fetch(`https://haunted-ghoul-15306.herokuapp.com/delete/${id}`, {
                        method: "DELETE"
                    })
                        .then((res) => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remaining = orders.filter(service => service._id !== id);
                                setOrders(remaining);
                            }
                        });
                } else {
                    swal("Don't want to delete?");
                }
            });
    }



    useEffect(() => {
        fetch('https://haunted-ghoul-15306.herokuapp.com/my_orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            });
    });
    
    return (
        <div className="mt-5 row">
            <div className="col-8">
                {
                    orders.map(order =>
                        <div key={order._id} className="card mb-5 mx-5">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={order.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{order.name}</h5>
                                        <p className="card-text">{order.description}</p>
                                        <p className="card-text"><small className="text-muted">Price: ${order.price}</small></p>
                                        <p className="card-text"><small className="text-muted">Status: {order.status}</small></p><button onClick={() => handleRemove(order._id)} className="offer-btn">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                }
            </div>
            <div className="col-4 m-0">
                <div className="col-md-3">
                    <h5>Name: {user.displayName}</h5>
                    <h6>Total get Offer: {orders.length}</h6>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
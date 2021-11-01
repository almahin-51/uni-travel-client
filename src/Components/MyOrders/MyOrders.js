import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);

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
                const currentUser = data?.filter(res => res?.userName === user.displayName);
                setOrders(currentUser);
            });
    },);

    const handleConfirm = ({ _id, ...rest }) => {
        const previous = { ...rest };
        previous.status = 'Approved';

        const url = `https://haunted-ghoul-15306.herokuapp.com/my_orders/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(previous)
        })
            .then(res => res.json())
            .then(data => {
                swal("Good job!", "Your confirm this order", "success");
                setOrders(orders);
            })
    };

    const check = 'Approved';
    return (
        <div className="mt-5 row">
            <div className="col-md-9">
                {
                    orders.map(order =>
                        <div key={order._id} className="card mb-5 mx-5">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={order.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p>{user.displayName}</p>
                                        <p>{order.email}</p>
                                        <h5 className="card-title">{order.name}</h5>
                                        <p className="card-text">{order.description}</p>
                                        <p className="card-text"><small className="text-muted">Price: ${order.price}</small></p>
                                        <p className="card-text"><small className="text-muted">Status: {order.status}</small></p>
                                        {
                                            (order.status !== check) ? <div>
                                                <button onClick={() => handleConfirm(order)} className="offer-btn me-4">Approved</button>
                                                <button onClick={() => handleRemove(order._id)} className="offer-btn">Remove</button>
                                            </div> : <button className="offer-btn bg-success">Approved</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                }
            </div>
        </div>
    );
};

export default MyOrders;
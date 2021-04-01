import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const [user, setUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/orders?email='+user.email)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        })
    }, [user.email])
    return (
        <div>
            {
                orders.map(order => <OrderDetails order={order}/>)
            }
        </div>
    );
};

export default Orders;
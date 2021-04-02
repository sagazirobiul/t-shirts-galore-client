import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import Spinner from '../Spinner/Spinner';
import './Order.css'

const Orders = () => {
    const [user, setUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://lychee-surprise-71619.herokuapp.com/orders?email='+user.email)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        })
    }, [user.email, orders])
    return (
        <Container>
            <h2 className="ordersHeader">Your Orders</h2>
            <div className="d-flex justify-content-between activeUser">
                <p>Email: {user.email}</p>
                <p>Active Orders: {orders.length}</p>
            </div>
            {!orders.length && <div className="spinner"><Spinner/></div>}
            {
                orders.map(order => <OrderDetails order={order}/>)
            }
        </Container>
    );
};

export default Orders;
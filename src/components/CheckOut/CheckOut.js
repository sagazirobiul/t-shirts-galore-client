import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {
    const { id } = useParams();
    const [user, setUser] = useContext(UserContext);
    const [checkOutProduct, setCheckOutProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:8000/tShirts/${id}`)
        .then(res => res.json())
        .then(data => {
            setCheckOutProduct(data);
        })
    }, [id])
    const handleCheckOut = () => {
        const newOrders = {
            description: checkOutProduct.description,
            color: checkOutProduct.color,
            price: checkOutProduct.price,
            img: checkOutProduct.img,
            orderTime: new Date().toDateString('dd/MM/yyy'),
            email: user.email
        }

        fetch('http://localhost:8000/addOrders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrders)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    return (
        <div>
            <table>
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{checkOutProduct.description}</td>
                    <td>1</td>
                    <td>{checkOutProduct.price}</td>
                </tr>
                <tr>
                    <td colSpan="2">Total</td>
                    <td>{checkOutProduct.price}</td>
                </tr>
            </table>
            <div>
                <Button as={Link} to="/orders" onClick={handleCheckOut}>Checkout</Button>
            </div>
        </div>
    );
};

export default CheckOut;
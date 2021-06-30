import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css';
import swal from 'sweetalert';

const CheckOut = () => {
    const { id } = useParams();
    const [user, setUser] = useContext(UserContext);
    const [checkOutProduct, setCheckOutProduct] = useState({})
    useEffect(() => {
        fetch(`https://lychee-surprise-71619.herokuapp.com/tShirts/${id}`)
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

        fetch('https://lychee-surprise-71619.herokuapp.com/addOrders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrders)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                swal("Success!", "Your order has been placed successfully!", "success");
            }
        })

    }
    return (
        <Container>
            <h2 className="checkOutHeader">CheckOut</h2>
            <div className="checkOutForm">
                <table>
                    <tr className="tableHeader">
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>{checkOutProduct.description}</td>
                        <td>1</td>
                        <td>${checkOutProduct.price}</td>
                    </tr>
                    <tr className="tableFooter">
                        <td colSpan="2">Total</td>
                        <td>${checkOutProduct.price}</td>
                    </tr>
                </table>
            </div>
            <div className="checkoutBtnDiv">
                <Button className="btn btn-info mr-4 mt-4 px-5 checkoutBtn" onClick={handleCheckOut}>Checkout</Button>
            </div>
        </Container>
    );
};

export default CheckOut;
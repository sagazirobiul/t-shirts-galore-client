import React from 'react';
import './OrderDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faUser, faCalendarWeek, faBarcode } from '@fortawesome/free-solid-svg-icons'


const OrderDetails = ({order}) => {
    const {_id, description, color, price, img, orderTime, email} = order
    return (
        <div className="d-flex orderDetailsBox">
             <div className="orderedProductImg">
                <img src={img} alt=""/>
            </div>
            <div className="orderedProductDetails">
                <h2 className="idHeader">OrderId #{_id}</h2>
                <div className="px-3">
                    <div className="d-flex justify-content-between">
                        <p><span className="orderHighlight"><FontAwesomeIcon icon={faBarcode} /></span> {description}</p>
                        <p>Price: ${price}</p>
                        <p>Qty: 1</p>
                    </div>
                    <p><span className="orderHighlight"><FontAwesomeIcon icon={faPalette} /></span> Color: {color}</p>
                    <p><span className="orderHighlight"><FontAwesomeIcon icon={faUser} /></span> Ordered by: {email}</p>
                    <p><span className="orderHighlight"><FontAwesomeIcon icon={faCalendarWeek} /></span> Placed on {orderTime}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
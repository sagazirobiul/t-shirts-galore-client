import React from 'react';

const OrderDetails = ({order}) => {
    const {description, color, price, img, orderTime, emial} = order
    return (
        <div>
            <h2>Description: {description} color: {color} price: {price}</h2>
        </div>
    );
};

export default OrderDetails;
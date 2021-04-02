import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = ({product}) => {
    const {_id, description, color, price, img} = product;
    return (
        <Col md={4}>
            <Card className="mt-4 productCard">
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div>
                    <h5 className="productDescription">{description}</h5>
                    <h6><span className="iconHighlight"><FontAwesomeIcon icon={faPalette} /></span> Color: {color}</h6>
                    <div className="d-flex justify-content-between align-items-center productDetails">
                        <p>Price: ${price}</p>
                        <Button className="btn btn-info buyBtn" as={Link} to={`/checkOut/${_id}`}><span className="carHighlight"><FontAwesomeIcon icon={faShoppingCart} /></span> Buy Now</Button>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default Product;
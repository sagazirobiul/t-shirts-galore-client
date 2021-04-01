import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, description, color, price, img} = product;
    return (
        <Col md={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h4>{description}</h4>
                    <div className="d-flex justify-content-between">
                        <p>Color: {color}</p>
                        <p>Price: ${price}</p>
                    </div>
                    <Button as={Link} to={`/checkOut/${_id}`} variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import Product from '../Product/Product';
import Spinner from '../Spinner/Spinner'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/tShirts')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, [])
    return (
        <Container>
            {!products.length && <div><Spinner/></div>}
            <Row>
                {
                    products.map(product => <Product key={product._id} product={product}/>)
                }
            </Row>
        </Container>
    );
};

export default Home;
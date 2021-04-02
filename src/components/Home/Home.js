import React, { useEffect, useState } from 'react';
import { Row, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import Product from '../Product/Product';
import Spinner from '../Spinner/Spinner'
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://lychee-surprise-71619.herokuapp.com/tShirts')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, [])
    return (
        <Container className="home">
            <InputGroup className="mb-3 col-md-5 mx-auto mt-4 searchInput">
                <FormControl/>
                <InputGroup.Append>
                    <Button variant="btn-success">Search</Button>
                </InputGroup.Append>
            </InputGroup>
            {!products.length && <div className="spinner"><Spinner/></div>}
            <Row>
                {
                    products.map(product => <Product key={product._id} product={product}/>)
                }
            </Row>
        </Container>
    );
};

export default Home;
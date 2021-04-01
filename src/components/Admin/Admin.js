import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    return (
        <Row>
            <Col md={3}>
                <h2><Link to="/">T-Shirts Galore</Link></h2>
                <Link to="/admin/manageProduct">Manage Product</Link>
                <Link to="/admin/addProduct">Add Product</Link>
            </Col>
            <Col md={9}>
                <Route exact path="/admin" component={ManageProduct} />
                <Route exact path="/admin/manageProduct" component={ManageProduct} />
                <Route path="/admin/addProduct" component={AddProduct} />
            </Col>
        </Row>
    );
};

export default Admin;
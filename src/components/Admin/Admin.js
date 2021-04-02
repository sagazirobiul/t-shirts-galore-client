import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPen, faThLarge } from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
    return (
        <>
        <Row className="mx-auto adminRow">
            <Col md={2} className="adminMenuBar">
                <h2><Link to="/"><span className="navHighlight">T-shirts</span> Galore</Link></h2>
                <div className="adminMenu">
                    <Link to="/admin/manageProduct"><span className="adminHighlight"><FontAwesomeIcon icon={faThLarge} /></span>Manage Product</Link>
                    <Link to="/admin/addProduct"><span className="adminHighlight"><FontAwesomeIcon icon={faPlus} /></span>Add Product</Link>
                    <Link><span className="adminHighlight"><FontAwesomeIcon icon={faPen} /></span>Edit Product</Link>
                </div>
            </Col>
            <Col md={10}>
                <Route exact path="/admin" component={ManageProduct} />
                <Route exact path="/admin/manageProduct" component={ManageProduct} />
                <Route path="/admin/addProduct" component={AddProduct} />
            </Col>
        </Row>
    </>
    );
};

export default Admin;
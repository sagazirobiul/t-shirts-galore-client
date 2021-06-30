import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'
import Spinner from '../Spinner/Spinner';
import './ManageProduct.css'
import swal from 'sweetalert';

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    const [isDeleted, setDeleted] = useState(false)
    useEffect(() => {
        fetch('https://lychee-surprise-71619.herokuapp.com/tShirts')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDeleted(false)
        })
    }, [isDeleted])

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure?, you want to delete this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if(willDelete){
                fetch('https://lychee-surprise-71619.herokuapp.com/delete?id='+id, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    swal('Success!', 'One product deleted successfully.', 'success');
                    setDeleted(data)
                })
            }
          });
    }
    return (
        <>
            <h2 className="manageHeader mt-3">Manage Product</h2>
            <div className="manageProduct mt-3">
                <div className="row manageProductHeader">
                    <p className="col-4">Description</p>
                    <p className="col-3">Color</p>
                    <p className="col-3">Price</p>
                    <p className="text-center col-2">Action</p>
                </div>
                {!products.length && <div className="spinner"><Spinner/></div>}
                {
                    products.map(({_id, description, color, price}) => {
                        return(
                            <div className="row manageProductDetail">
                                <p className="col-4">{description}</p>
                                <p className="col-3">{color}</p>
                                <p className="col-3">{price}</p>
                                <div className="text-center col-2">
                                    <button className="btn btn-outline-success"><FontAwesomeIcon icon={faEdit} /></button>
                                    <button className="btn btn-outline-danger" onClick={() => handleDelete(_id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ManageProduct;
import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'


const ManageProduct = () => {
    const [products, setProducts] = useState([])
    const [isDeleted, setDeleted] = useState(false)
    useEffect(() => {
        fetch('http://localhost:8000/tShirts')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDeleted(false)
        })
    }, [isDeleted])

    const handleDelete = (id) => {
        fetch('http://localhost:8000/delete?id='+id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            setDeleted(data)
        })
    }
    return (
        <div>
            <div className="row">
                <p className="col-4">Description</p>
                <p className="col-3">Color</p>
                <p className="col-3">Price</p>
                <p className="text-center col-2">Action</p>
            </div>
            {
                products.map(({_id, description, color, price}) => {
                    return(
                        <div className="row">
                            <p className="col-4">{description}</p>
                            <p className="col-3">{color}</p>
                            <p className="col-3">{price}</p>
                            <div className="text-center col-2">
                                <button><FontAwesomeIcon icon={faEdit} /></button>
                                <button onClick={() => handleDelete(_id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ManageProduct;
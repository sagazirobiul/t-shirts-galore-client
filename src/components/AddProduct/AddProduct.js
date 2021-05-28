import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register , handleSubmit, errors, reset } = useForm();
    const [imgURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const productsData = {
            description: data.description,
            color: data.color,
            price: data.price,
            img: imgURL
        }
        fetch('https://lychee-surprise-71619.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(productsData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('your product added successfully')
            }
        })
        reset();
    };
    const handleImgUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'de75c4b6bad601ff97ee1958b8ab0bfc');
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then( response => {
            setImageURL(response.data.data.display_url)
          })
          .catch( error => {
            console.log(error);
          });
    }
    return (
        <>
        <h2 className="manageHeader mt-3">Add Product</h2>
        <div className="mt-3 formDiv">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row allInput addProduct">
                    <div className="col-md-6">
                        <label for="description">Description</label>
                        <br/>
                        <input name="description" id="description" placeholder="Enter description" ref={register({ required: true })} />
                        {errors.description && <span className='text-warning'>Description is required!</span>}
                    </div>
                    <div className="col-md-6">
                        <label for="color">Color</label>
                        <br/>
                        <input name="color" id="color" placeholder="Enter color name" ref={register({ required: true })} />
                        {errors.color && <span className='text-warning'>Color is required!</span>}
                    </div>
                    <div className="col-md-6 mt-3">
                        <label for="price">Price</label>
                        <br/>
                        <input name="price" id="price" placeholder="Enter price" ref={register({ required: true })} />
                        {errors.price && <span className='text-warning'>Price is required!</span>}
                    </div>
                    <div className="col-md-6 mt-3">
                        <label for="file">Add Photo</label>
                        <br/>
                        <input type="file" id="file" placeholder="Upload Photo" name="img" onChange={handleImgUpload} ref={register({ required: true })}/>
                        {imgURL === null && <span className='text-warning'>Image is required!</span>}
                    </div>
                </div>
                <div className="saveButton">
                    <button className="btn btn-info mr-4 mt-4 px-5" type="submit">Save</button>
                </div>
            </form>
        </div>
        </>
    );
};

export default AddProduct;
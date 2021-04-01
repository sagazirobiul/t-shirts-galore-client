import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imgURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const productsData = {
            description: data.description,
            color: data.color,
            price: data.price,
            img: imgURL
        }
        
        fetch('http://localhost:8000/addProduct', {
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="description" placeholder="Product Name" ref={register} />
                <br/>
                <input name="color" placeholder="Color" ref={register} />
                <br/>
                <input name="price" placeholder="Price" ref={register} />
                <br/>
                <input type="file" placeholder="Upload Photo" name="img" onChange={handleImgUpload} />
                <br/>
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
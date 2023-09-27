import React, { useState } from 'react';
import './AddProduct.scoped.css';
import NavBar from "../components/NavBar";

const AddProduct = () => {
  return (
    <div className="container">
        <NavBar />
        <h1>Add Product</h1>
        <form className="form-box" action='' method='post'>
            <label htmlFor="productname">Product Name</label>
            <input type="text"/>
            <label htmlFor="productprice">Price</label>
            <input type="text"/>
            <label htmlFor="productimage">Image</label>
            <input type="file" multiple/>
            <label htmlFor="productdescription">Description</label>
            <textarea name="" id="" cols="70" rows="7"></textarea>
            <button className='send-button'>Send</button>
        </form>
    </div>
        
);
};

export default AddProduct;

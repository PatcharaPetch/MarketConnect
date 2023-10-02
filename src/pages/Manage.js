import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Manage.scoped.css';
import NavBar from "../components/NavBar";
import {PopChat} from "../components/PopChat";

const Manage = () => {
    const handleDelete = () => {
        const confirmDelete = window.confirm('คุณต้องการลบข้อมูลนี้ใช่หรือไม่?');
        if (confirmDelete) {
            // ลบข้อมูล
        }
    }
     
    return (
        <div className="container">
            <NavBar />
            <PopChat messages={[]} />
            <h1>Manage</h1>
            <div className="add-box">
                <Link to="/addproduct" className="add-product">Add Product</Link>
            </div>
            <div className="edit-box">
                <div className='edit-box-left'>Product</div>
                <div className='edit-box-right'>
                    <Link to="/editproduct" className="edit-product">Edit
                        <img src="editicon.png" alt="" />
                    </Link>
                    <Link to="/deleteproduct" className="delete-product">Delete
                        <img src="deleteicon.png" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default Manage;
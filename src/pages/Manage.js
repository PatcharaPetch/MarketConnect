import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Manage.scoped.css";
import NavBar from "../components/NavBar";
import { PopChat } from "../components/PopChat";
import { AuthContext, useSupabase } from "../App";
import axios from "axios";

const Manage = () => {
  const supabase = useSupabase();
  const { user } = createContext(AuthContext);
  const Del_Item = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3200/delete", {
        user: user,
        // food: food,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };
  // const Edit_Item = async (event) => {};
  return (
    <div className="container">
      <NavBar />
      <PopChat messages={[]} />
      <h1>Manage</h1>
      <div className="add-box">
        <Link to="/addproduct" className="add-product">
          Add Product
        </Link>
      </div>
      <form onSubmit={Del_Item} className="edit-box">
        <div className="edit-box-left">Edit Product1</div>
        <div className="edit-box-right">
          <Link to="/editproduct" className="edit-product">
            Edit
            <img src="editicon.png" alt="" />
          </Link>
          <button type="submit" className="delete-product">
            Delete
            <img src="deleteicon.png" alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Manage;

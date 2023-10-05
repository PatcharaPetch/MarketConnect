import React, { useContext, useState } from "react";
import "./AddProduct.scoped.css";
import NavBar from "../components/NavBar";
import { PopChat } from "../components/PopChat";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext, useSupabase } from "../App";

const AddProduct = () => {
  const supabase = useSupabase();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleProduct = (event) => {
    event.preventDefault();
    const cata = event.target[2].value;
    axios
      .post("http://localhost:3200/addproduct", {
        name: event.target[0].value,
        price: event.target[1].value,
        catagory_id: cata,
        id: user.id,
        description: event.target[4].value,
      })
      .then((res) => {
        // const { food_id } = supabase
        //   .from("Food")
        //   .select("id", { head: true })
        //   .order("id", { ascending: false })
        //   .limit(1);
        // console.log(food_id);
        const { error } = supabase.storage
          .from("Picture_Food")
          .upload("67" + ".png", event.target[3].files[0], {
            contentType: "image/png",
            upsert: true,
          });
        if (error) {
          console.log(error);
        }
        alert("Add food success.");
        navigate("/manage");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container">
      <NavBar />
      <PopChat messages={[]} />
      <h1>Product</h1>
      <form onSubmit={handleProduct} className="form-box">
        <label htmlFor="productname">Food Name</label>
        <input type="text" />
        <label htmlFor="productprice">Price</label>
        <input type="text" />
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          <option value="1">Thai-Food</option>
          <option value="2">Japan-Food</option>
          <option value="3">Korean-Food</option>
          <option value="4">Italian-Food</option>
          <option value="5">Drinks</option>
          <option value="6">Sweets and Desserts</option>
        </select>
        <label htmlFor="productimage">Image</label>
        <input type="file" multiple />
        <label htmlFor="productdescription">Description</label>
        <textarea name="" id="" cols="70" rows="7" />
        <button type="submit" className="send-button">
          Done
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

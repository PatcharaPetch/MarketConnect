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
    axios
      .post("http://localhost:3200/addproduct", {
        name: event.target[0].value,
        price: event.target[1].value,
        id: user.id,
        description: event.target[3].value,
      })
      .then((res) => {
        const { food_id } = supabase
          .from("Food")
          .select("id", { head: true })
          .order("id", { ascending: false })
          .limit(1);
        console.log(food_id);
        const { error } = supabase.storage
          .from("Picture_Food")
          .upload(food_id + ".png", event.target[2].files[0], {
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

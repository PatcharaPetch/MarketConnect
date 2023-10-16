import React, { useContext, useState } from "react";
import "./AddProduct.scoped.css";
import NavBar from "../components/NavBar";
import { PopChat } from "../components/PopChat";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext, useSupabase } from "../App";

const AddProduct = () => {
  const [file, setFile] = useState("");
  const [isUploading, setIsUploading] = useState(false);
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
        picture: file,
      })
      .then((res) => {
        alert("Add food success.");
        navigate("/manage");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const upload_File = async (event) => {
    setIsUploading(true);
    const filename = Math.random()
      .toString(36)
      .slice(2);
    const { error } = await supabase.storage
      .from("Picture_Food")
      .upload(filename + ".png", event.target.files[0], {
        contentType: "image/png",
        upsert: true,
      });
    if (error) {
      setIsUploading(false);
      return alert(error);
    }
    const { data } = supabase.storage
      .from("Picture_Food")
      .getPublicUrl(filename + ".png");
    setFile(data.publicUrl);
    setIsUploading(false);
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
        <input onChange={upload_File} type="file" />
        <label htmlFor="productdescription">Description</label>
        <textarea name="" id="" cols="70" rows="7" />
        <button disabled={isUploading} type="submit" className="send-button">
          Done
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Manage.scoped.css";
import NavBar from "../components/NavBar";
import { PopChat } from "../components/PopChat";
import { AuthContext, useSupabase } from "../App";
import axios from "axios";
import DeleteConfirmPopup from '../components/DeleteConfirmPopup';

const Manage = () => {
  const supabase = useSupabase();
  const { user } = createContext(AuthContext);
  const handleDelete = async (event) => {
    setShowPopup(false);
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

  const [showPopup, setShowPopup] = useState(false); // State เพื่อแสดง/ซ่อน Popup

  const openPopup = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
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
      <form onSubmit={openPopup} className="edit-box">
        <div className="edit-box-left">Edit Product1</div>
        <div className="edit-box-right">
          <Link to="/editproduct" className="edit-product">
            Edit
            <img src="editicon.png" alt="" />
          </Link>
          <button type="submit" className="delete-product" >
            Delete
            <img src="deleteicon.png" alt="" />
          </button>
        </div>
      </form>
      {showPopup && (
        <DeleteConfirmPopup
          onCancel={closePopup}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Manage;

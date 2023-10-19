import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Manage.scoped.css";
import NavBar from "../components/NavBar";
import { PopChat } from "../components/PopChat";
import { AuthContext } from "../App";
import axios from "axios";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";

const Manage = () => {
  const { user } = useContext(AuthContext);
  // console.log(user?.id);
  const handleDelete = async (event) => {
    setShowPopup(false);
    event.preventDefault();
    axios
      .post("http://localhost:3200/delete", {
        food: foodid,
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

  const Edit_Item = () => {
    const [Food, setFood] = useState([]);
    useEffect(() => {
      axios
        .post("http://localhost:3200/yourfood", {
          user: user?.id,
        })
        .then((res) => {
          setFood(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }, []);
    if (!Food) return;
    return Food.map((item) => {
      return (
        <form onSubmit={openPopup} className="edit-box">
          <div className="edit-box-left" key={item?.id}>
            <img src={item?.URL} alt="" />
          </div>
          <div className="edit-box-right">
            <Link
              to={"/addproduct/" + item.id}
              className="edit-product"
              key={item.id}
            >
              Edit
              <img src="editicon.png" alt="" />
            </Link>
            <button type="submit" className="delete-product">
              Delete
              <img src="deleteicon.png" alt="" />
            </button>
          </div>
        </form>
      );
    });
  };
  return (
    <div className="container">
      <NavBar />
      {/* <PopChat messages={[]} /> */}
      <h1>Manage</h1>
      <div className="add-box">
        <Link to="/addproduct" className="add-product">
          Add Product
        </Link>
      </div>
      {/* <form onSubmit={openPopup} className="edit-box">
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
      </form> */}
      <Edit_Item />
      {showPopup && (
        <DeleteConfirmPopup onCancel={closePopup} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Manage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FoodDetail.scoped.css";
import NavBar from "../components/NavBar";
import { PopChat } from "../components/PopChat";
import axios from "axios";

const FoodDetail = () => {
  const [imgId, setImgId] = useState(1);
  const { foodid } = useParams();
  const [food, setFood] = useState({});
  useEffect(() => {
    axios
      .post("http://localhost:3200/fooddetail", {
        foodid: foodid,
      })
      .then(({ data }) => {
        setFood(data[0]);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    console.log(food);
  }, [food]);

  // useEffect(() => {
  //   const imgBtns = document.querySelectorAll('.img-select a');
  //   const imgBtnArray = Array.from(imgBtns);
  //   imgBtnArray.forEach((imgItem) => {
  //     imgItem.addEventListener('click', (event) => {
  //       event.preventDefault();
  //       setImgId(parseInt(imgItem.dataset.id));
  //     });
  //   });

  //   const slideImage = () => {
  //     const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
  //     document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
  //   };

  //   window.addEventListener('resize', slideImage);

  //   slideImage();

  //   return () => {
  //     window.removeEventListener('resize', slideImage);
  //   };
  // }, [imgId]);

  return (
    <div className="container">
      <NavBar />
      <PopChat messages={[]} />
      <div className="container-box">
        <div className="box">
          {/* card left */}
          <div className="img-box">
            <div className="img-display">
              <div className="img-showcase">
                <img src="detail1.svg" alt="" />
              </div>
            </div>
          </div>
          {/* card right */}
          <div className="product-content">
            <h2 className="product-title"> data.Food_Name </h2>
            <div className="product-price">
              <p className="last-price">
                Price: <span>data.Price ฿</span>
              </p>
            </div>

            <div className="product-detail">
              <h2>About Food: </h2>
              <p>data.Description</p>
              <ul>
                {/* <li>
                  Category: <span>Japanese Food</span>
                </li> */}
                <li>
                  Name: <span>data.Fisrtname data.Lastname</span>
                </li>
                <li>
                  Contact: <span>data.Contact</span>
                </li>
                {/* <li>
                  Shipping Fee: <span>Free</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;

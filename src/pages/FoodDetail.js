import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FoodDetail.scoped.css";
import NavBar from "../components/NavBar";
import { PopChat } from "../components/PopChat";
import axios from "axios";
import { useSupabase } from "../App";

const FoodDetail = () => {
  const supabase = useSupabase();
  const [imgId, setImgId] = useState(1);
  const { foodid } = useParams();
  const [food, setFood] = useState({});
  const [img, setImg] = useState();
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
    const {
      data: { publicUrl },
    } = supabase.storage.from("Picture_Food").getPublicUrl(foodid + ".png");
    if (publicUrl) {
      const timestamp = Date.now().toString();
      setImg(publicUrl + `?timestamp=${timestamp}`);
    }
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
                <img src={img} alt="" />
              </div>
            </div>
          </div>
          {/* card right */}
          <div className="product-content">
            <h2 className="product-title">
              <p>{food?.Food_Name ?? "-"}</p>
            </h2>
            <div className="product-price">
              <p className="last-price">
                Price: <p>{food?.Price ?? "-"}</p>
              </p>
            </div>
            {/* <h3>FirstName</h3>
            <p>{user?.user_metadata?.firstname ?? "-"}</p>
            <h3>Lastname</h3>
            <p>{user?.user_metadata?.lastname ?? "-"}</p>
            <h3>Contact Number</h3>
            <p>{user?.user_metadata?.contact ?? "-"}</p> */}

            <div className="product-detail">
              <h2>About Food: </h2>
              <p>{food?.Description ?? "-"}</p>
              <ul>
                <li>
                  Category: <p>{food?.Catagory?.catagory_name ?? "-"}</p>
                </li>
                <li>
                  Name:{" "}
                  <p>
                    {food?.User?.firstname ?? "-"} {food?.User?.lastname ?? "-"}
                  </p>
                </li>
                <li>
                  Contact: <p>{food?.User?.contact ?? "-"}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;

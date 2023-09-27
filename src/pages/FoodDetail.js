import React, { useState, useEffect } from 'react';
import './FoodDetail.scoped.css';
import NavBar from "../components/NavBar";

const FoodDetail = () => {
  const [imgId, setImgId] = useState(1);

  useEffect(() => {
    const imgBtns = document.querySelectorAll('.img-select a');
    const imgBtnArray = Array.from(imgBtns);
    imgBtnArray.forEach((imgItem) => {
      imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        setImgId(parseInt(imgItem.dataset.id));
      });
    });

    const slideImage = () => {
      const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
      document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    };

    window.addEventListener('resize', slideImage);

    slideImage();

    return () => {
      window.removeEventListener('resize', slideImage);
    };
  }, [imgId]);

  return (
    <div className="container">
    <NavBar /> 
    <div className="container-box">
      <div className="box">
        {/* card left */}
        <div className="img-box">
          <div className="img-display">
            <div className="img-showcase">
              <img src="detail1.svg" alt="" />
              <img src="detail2.svg" alt="" />
              <img src="detail3.svg" alt="" />
              <img src="detail4.svg" alt="" />
            </div>
          </div>
          <div className="img-select">
            <div className="img-item">
              <a href="#" data-id="1">
                <img src="detail1.svg" alt=""/>
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="2">
                <img src="detail2.svg" alt=""/>
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="3">
                <img src="detail3.svg" alt=""/>
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="4">
                <img src="detail4.svg" alt=""/>
              </a>
            </div>
          </div>
        </div>
        {/* card right */}
        <div className="product-content">
          <h2 className="product-title">Hippo Yakitori</h2>
          <div className="product-price">
            <p className="last-price">
              Old Price: <span>250.00-350.00 ฿</span>
            </p>
            <p className="new-price">
              New Price: <span>150.00-250.00 ฿</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>About Food: </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet veniam tempora fuga tenetur placeat sapiente architecto
              illum soluta consequuntur, aspernatur quidem at sequi ipsa!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Quos vel a quisquam quis omnis quibusdam facilis sed, ipsum molestias, 
              numquam eveniet? Nostrum, voluptates accusantium sed obcaecati autem at dolores impedit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nostrum asperiores nemo, 
              dicta consequuntur expedita doloribus blanditiis aliquam quod maxime atque saepe consequatur alias accusamus,
               placeat natus nobis porro praesentium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nostrum asperiores nemo, 
              dicta consequuntur expedita doloribus blanditiis aliquam quod maxime atque saepe consequatur alias accusamus,
               placeat natus nobis porro praesentium.
            </p>
            <ul>
              <li>
                Category: <span>Japanese Food</span>
              </li>
              <li>
                Opening: <span>9.00-21.00</span>
              </li>
              <li>
                Shipping Area: <span>Soi Wongsawang 7,11,19</span>
              </li>
              <li>
                Shipping Fee: <span>Free</span>
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

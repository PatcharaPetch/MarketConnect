import React, { useState } from 'react';
import './FoodDetail.scoped.css';
import NavBar from "../components/NavBar";

const FoodDetail = () => {
  return (
    <div className="container">
        <NavBar />
        <div id="promotions-box">
                    <h1>PROMOTION</h1>
                    <div className="promotion-box-scroll">
                        <PromotionItems />
                    </div>
        </div>

        
    </div>
        
);
};

export default FoodDetail;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import FoodSearchBar from "../components/FoodSearchBar";
import "../components/FoodSearchBar.scoped.css";
import "./Food.scoped.css";
import { PopChat } from "../components/PopChat";

const Food = () => {
  const [foodAll, setFood] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3200/food")
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    handleSearch("");
  }, [foodAll]);
  const [filteredFood, setFilteredFood] = useState(foodAll);

  const handleSearch = (searchTerm) => {
    const filtered = foodAll.filter((food) =>
      food?.Food_Name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFood(filtered);
  };

  return (
    <div className="container">
      <NavBar />
      <PopChat messages={[]} />
      <main>
        <section id="food-box">
          <FoodSearchBar onSearch={handleSearch} />
          <div className="food-box-grid">
            <FoodItems foodData={filteredFood} />
          </div>
        </section>
      </main>
    </div>
  );
};

const FoodItems = ({ foodData }) => {
  if (!foodData) return;
  return foodData.map((item) => {
    return (
      <Link className="food-item" key={item.id} to={"/fooddetail/" + item.id}>
        <img src={item.URL} alt="" />
        <div className="food-item-name">{item.Food_Name}</div>
        <div className="food-item-price">{item.Price?.toFixed(2)} ฿</div>
      </Link>
    );
  });
};

const food_data = [
  {
    id: 1,
    name: "Pork",
    price: 100,
    image: "/pork.jpg",
  },

  {
    id: 2,
    name: "Chicken",
    price: 120,
    image: "/chicken.jpg",
  },

  {
    id: 3,
    name: "Beef",
    price: 150,
    image: "/beef.jpg",
  },

  {
    id: 4,
    name: "Fish",
    price: 100,
    image: "/fish.jpg",
  },

  {
    id: 5,
    name: "Shrimp",
    price: 150,
    image: "/shrimp.jpg",
  },

  {
    id: 6,
    name: "Crab",
    price: 200,
    image: "/crab.jpg",
  },

  {
    id: 7,
    name: "Squid",
    price: 100,
    image: "/squid.jpg",
  },

  {
    id: 8,
    name: "Burger",
    price: 200,
    image: "/burger.jpg",
  },

  {
    id: 9,
    name: "Lobster",
    price: 300,
    image: "/lobster.jpg",
  },

  {
    id: 10,
    name: "Oyster",
    price: 100,
    image: "/oyster.jpg",
  },

  {
    id: 11,
    name: "Pizza",
    price: 200,
    image: "/pizza.jpg",
  },

  {
    id: 12,
    name: "Somtam",
    price: 100,
    image: "/somtam.jpg",
  },
];

export default Food;

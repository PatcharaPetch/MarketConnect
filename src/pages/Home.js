import "./Home.scoped.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { PopChat } from "../components/PopChat";
const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <main>
        <section id="promotions-box">
          <h1>PROMOTION</h1>
          <div className="promotion-box-scroll">
            <PromotionItems />
          </div>
        </section>
        <section id="new-box">
          <h1>NEW ARRIVALS</h1>
          <div className="new-box-scroll">
            <NewArrivals />
          </div>
        </section>
        <section id="rec-box">
          <h1>RANDOM FOOD</h1>
          <div className="rec-box-grid">
            <Random />
          </div>
        </section>
        {/* <PopChat messages={[]} /> */}
      </main>
    </div>
  );
};

const PromotionItems = () => {
  return promotion_data.map((item) => {
    return (
      <div className="promotion-item" key={item.id} to={item.link}>
        <img src={item.image} alt="" />
      </div>
    );
  });
};

const NewArrivals = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3200/new")
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return food.map((item) => {
    return (
      <Link className="new-item" key={item.id} to={"/fooddetail/" + item.id}>
        <img src={item.URL} alt="" />
        <div className="new-item-name">{item.Food_Name}</div>
        <div className="new-item-price">{item.Price?.toFixed(2)} ฿</div>
      </Link>
    );
  });
};

const Random = () => {
  const [ranFood, setRanFood] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3200/food")
      .then((res) => {
        const food = res.data;
        const randomFood = [];
        for (let i = 0; i < 6; i++) {
          var random = Math.floor(Math.random() * food.length);
          randomFood[i] = food[random];
          food.splice(random, 1);
        }
        setRanFood(randomFood);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  if (ranFood[0] == undefined) return;

  return ranFood.map((item) => {
    return (
      <Link className="rec-item" key={item?.id} to={"/fooddetail/" + item?.id}>
        <img src={item?.URL} alt="" />
        <div className="rec-item-name">{item?.Food_Name}</div>
        <div className="rec-item-price">{item?.Price.toFixed(2)} ฿</div>
      </Link>
    );
  });
};

const promotion_data = [
  {
    id: 1,
    image: "sale0.svg",
    link: "/fooddetail",
  },
  {
    id: 2,
    image: "sale4.svg",
    link: "/fooddetail",
  },
  {
    id: 3,
    image: "detail1.svg",
    link: "/fooddetail",
  },
  {
    id: 4,
    image: "promo1.svg",
    link: "/fooddetail",
  },
  {
    id: 5,
    image: "promo2.svg",
    link: "/fooddetail",
  },
  {
    id: 6,
    image: "promo3.svg",
    link: "/fooddetail",
  },
];

export default Home;

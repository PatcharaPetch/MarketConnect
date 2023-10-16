import "./Home.scoped.css";
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
            <Recommended />
          </div>
        </section>
        <PopChat messages={[]} />
      </main>
    </div>
  );
};

const PromotionItems = () => {
  return promotion_data.map((item) => {
    return (
      <Link className="promotion-item" key={item.id} to={item.link}>
        <img src={item.image} alt="" />
      </Link>
    );
  });
};

const NewArrivals = () => {
  const promotion_data = axios.get();
  return newArrivals_data.map((item) => {
    return (
      <Link className="new-item" key={item.id} to={"/fooddetail/" + item.id}>
        <img src={item.image} alt="" />
        <div className="new-item-name">{item.name}</div>
        <div className="new-item-price">{item.price.toFixed(2)} ฿</div>
      </Link>
    );
  });
};

const Recommended = () => {
  return recommended_data.map((item) => {
    return (
      <Link className="rec-item" key={item.id} to={"/fooddetail/" + item.id}>
        <img src={item.image} alt="" />
        <div className="rec-item-name">{item.name}</div>
        <div className="rec-item-price">{item.price.toFixed(2)} ฿</div>
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

const newArrivals_data = [
  {
    id: 1,
    image: "/food1.jpg",
    name: "เครื่องเทศที่ตำน๊านนาน",
    price: 500,
  },
  {
    id: 2,
    image: "/food2.jpg",
    name: "สเต๊กหมูพ่นไฟ",
    price: 425,
  },
  {
    id: 3,
    image: "/food3.jpg",
    name: "เฟรนฟรายแถมแฮมเบอร์เกอร์",
    price: 300,
  },
  {
    id: 4,
    image: "/food4.jpg",
    name: "สเต๊กปลาส้มน้อย",
    price: 100,
  },
];

const recommended_data = [
  {
    id: 67,
    image: "/food1.jpg",
    name: "เครื่องเทศที่ตำน๊านนาน",
    price: 500,
  },
  {
    id: 2,
    image: "/food2.jpg",
    name: "สเต๊กหมูพ่นไฟ",
    price: 425,
  },
  {
    id: 3,
    image: "/food3.jpg",
    name: "เฟรนฟรายแถมแฮมเบอร์เกอร์",
    price: 300,
  },
  {
    id: 4,
    image: "/food4.jpg",
    name: "สเต๊กปลาส้มน้อย",
    price: 100,
  },
  {
    id: 5,
    image: "/food5.jpg",
    name: "เค้กบาร์สลีปปี้",
    price: 150,
  },
  {
    id: 6,
    image: "/food1.jpg",
    name: "เครื่องเทศที่ตำน๊านนาน Version 2",
    price: 600,
  },
];
export default Home;

import "./Home.scoped.css";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <main>
                <section id="promotions">
                    <h1>PROMOTION</h1>
                    <div className="promotion">
                        <PromotionItems />
                    </div>
                </section>
                <section id="new">
                    <h1>NEW ARRIVALS</h1>
                    <div className="reel">
                        <NewArrivals />
                    </div>
                </section>
                <section id="recommend">
                    <h1>RECOMMENDED</h1>
                    <div className="grid_rec">
                        {/* <Recommended /> */}
                    </div>

                </section>
            </main>
        </div>
    );
};

const PromotionItems = () => {
    return promotion_data.map(item => {
        return (
            <Link className="promotion-item" key={item.id} to={item.link}>
                <img src={item.image} alt="" />
            </Link>
        );
    });
};

const NewArrivals = () => {
    return newArrivals_data.map(item => {
        return (
            <div className="new-item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="new-item-name">{item.name}</div>
                <div className="new-item-price">{item.price.toFixed(2)} ฿</div>
            </div>
        );
    });
};

const Recommended = () => {
    return recommended_data.map(item => {
        return (
            <div className="rec-item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="rec-item-name">{item.name}</div>
                <div className="rec-item-price">{item.price.toFixed(2)} ฿</div>
            </div>
        );
    });
};

const promotion_data = [
    {
        id: 1,
        image: "/food5.jpg",
        link: "/promotion/1"
    },
    {
        id: 2,
        image: "/food4jpg.jpg",
        link: "/promotion/2"
    },
    {
        id: 3,
        image: "/food3.jpg",
        link: "/promotion/3"
    },
    {
        id: 4,
        image: "/food1.jpg",
        link: "/promotion/4"
    },
    {
        id: 5,
        image: "/food2.jpg",
        link: "/promotion/5"
    }
];

const newArrivals_data = [
    {
        id: 1,
        image: "/food1.jpg",
        name: "ข้าวผัดกุ้ง",
        price: 50
    },
    {
        id: 2,
        image: "/food2.jpg",
        name: "ข้าวผัดหมู",
        price: 40
    },
    {
        id: 3,
        image: "/food3.jpg",
        name: "ข้าวผัดไก่",
        price: 40
    },
    {
        id: 4,
        image: "/food4jpg.jpg",
        name: "ข้าวผัดปู",
        price: 50
    },
]

export default Home;
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

const promotion_data = (() => {
    var items = [];
    for (var i = 0; i < 10; i++) {
        items.push({
            id: i,
            link: "/promotion" + (i + 1),
            image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Dummy_flag.png"
        });
    }
    return items;
})();

const newArrivals_data = (() => {
    var items = [];
    for (var i = 0; i < 10; i++) {
        items.push({
            id: i,
            name: "Item " + i,
            price: 100 + i,
            image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Dummy_flag.png"
        });
    }
    return items;
})();

export default Home;
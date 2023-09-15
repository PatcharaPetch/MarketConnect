import "./Home.scoped.css";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <header>
                <h1>MarketConnect</h1>
                <div className="nav-bar">
                    <NavLink className={({isActive}) => isActive ? "nav-item active" : "nav-item"} to="/">Home <img className="nav-icon" src="/homeicon.png" alt="" /></NavLink>
                    <NavLink className={({isActive}) => isActive ? "nav-item active" : "nav-item"} to="/food">Food <img className="nav-icon" src="/foodicon.png" alt="" /></NavLink>
                    <NavLink className={({isActive}) => isActive ? "nav-item active" : "nav-item"} to="/shop">Shop <img className="nav-icon" src="/shopicon.png" alt="" /></NavLink>
                    <NavLink className={({isActive}) => isActive ? "nav-item active" : "nav-item"} to="/support">Support <img className="nav-icon" src="/supporticon.png" alt="" /></NavLink>
                    <NavLink className={({isActive}) => isActive ? "nav-item active" : "nav-item"} to="/register">Profile <img className="nav-icon" src="/profileicon.png" alt="" /></NavLink>
                </div>
            </header>
            <main>
                <section id="promotions">
                    <h3>PROMOTION</h3>
                    <div className="promotion">
                        <PromotionItems />
                    </div>
                </section>
                <section id="new">
                    <h3>NEW ARRIVALS</h3>
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
            <div className="promotion-item" key={item.id}>
                <img src={item.image} alt="" />
            </div>
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
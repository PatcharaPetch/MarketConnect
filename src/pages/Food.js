import NavBar from "../components/NavBar";
import "./Food.scoped.css";

const Food = () => {
    return (
        <div className="container">
            <NavBar />
            <main>
                <section id="food-box">
                    <h1>FOOD</h1>
                    <div className="food-box-grid">
                        <FoodItems />
                    </div>
                </section>
            </main>
        </div>
    );
};

const FoodItems = () => {
    return food_data.map(item => {
        return (
            <div className="food-item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="food-item-name">{item.name}</div>
                <div className="food-item-price">{item.price.toFixed(2)} ฿</div>
            </div>
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



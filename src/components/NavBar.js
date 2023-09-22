import { NavLink } from "react-router-dom";
import "./NavBar.scoped.css";

const NavBar = () => {
    const nav_class = ({ isActive }) => (isActive ? "nav-item active" : "nav-item");
    
    return (
        <header>
            <h1>MarketConnect</h1>
            <nav className="nav-bar">
                <NavLink className={nav_class} to="/">Home <NavIcon img="/homeicon.png" /></NavLink>
                <NavLink className={nav_class} to="/food">Food <NavIcon img="/foodicon.png" /></NavLink>
                <NavLink className={nav_class} to="/chat">Chat <NavIcon img="/chaticon.png" /></NavLink>
                <NavLink className={nav_class} to="/support">Support <NavIcon img="/supporticon.png" /></NavLink>
                <NavLink className={nav_class} to="/register">Profile <NavIcon img="/profileicon.png" /></NavLink>
            </nav>
        </header>
    );
}

const NavIcon = ({img}) => <img src={img} alt="" className="nav-icon" />;

export default NavBar;
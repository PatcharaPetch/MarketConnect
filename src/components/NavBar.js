import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scoped.css";

class NavBar extends Component {
    render() {
        return (
            <header>
                <h1>MarketConnect</h1>
                <div className="nav-bar">
                    <NavLink className={nav_class} to="/">Home <NavIcon img="/homeicon.png" /></NavLink>
                    <NavLink className={nav_class} to="/food">Food <NavIcon img="/foodicon.png" /></NavLink>
                    <NavLink className={nav_class} to="/shop">Shop <NavIcon img="/shopicon.png" /></NavLink>
                    <NavLink className={nav_class} to="/support">Support <NavIcon img="/supporticon.png" /></NavLink>
                    <NavLink className={nav_class} to="/register">Profile <NavIcon img="/profileicon.png" /></NavLink>
                </div>
            </header>
        );
    }
}

const NavIcon = ({img}) => <img src={img} alt="" className="nav-icon" />;

const nav_class = ({isActive}) => isActive ? "nav-item active" : "nav-item";

export default NavBar;
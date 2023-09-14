import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-main">
      <div className="MarketConnect-profile">MarketConnect</div>
      <div className="Menu">
        <Link to="/home" className="Menuitem">
          <img className="Icon" src="" alt="" />
          <div className="text-icon">Home</div>
        </Link>
        <Link to="/food" className="Menuitem">
          <img className="Icon" src="" alt="" />
          <div className="text-icon"> Food</div>
        </Link>
        <Link to="/shop" className="Menuitem">
          <img className="Icon" alt="" />
          <div className="text-icon">Shop</div>
        </Link>
        <Link to="/support" className="Menuitem">
          <img className="Icon" alt="" />
          <div className="text-icon">Support</div>
        </Link>
        <Link to="/profile" className="Menuitem">
          <img className="Icon" alt="" />
          <div className="text-icon">Profile</div>
        </Link>
      </div>
      <div className="editprofile">Edit Profile</div>
    </div>
  );
};

export default Profile;

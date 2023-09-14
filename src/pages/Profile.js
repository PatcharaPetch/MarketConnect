import { useCallback } from "react";
import "./Profile.scoped.css";

const Profile = () => {
  const onMenuItemContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onMenuItemContainer1Click = useCallback(() => {
    // Please sync "Food" to the project
  }, []);

  const onMenuItemContainer2Click = useCallback(() => {
    // Please sync "Shop" to the project
  }, []);

  const onMenuItemContainer3Click = useCallback(() => {
    // Please sync "Support" to the project
  }, []);

  return (
    <div className="profile">
      <div className="footer">
        <div className="email-box">
          <img className="email-box-child" alt="" src="/rectangle-13.svg" />
          <img className="email-box-item" alt="" src="/rectangle-14.svg" />
          <div className="email">
            <p className="home">Email</p>
          </div>
          <div className="send">Send</div>
        </div>
        <div className="navigation-footer">
          <p className="home">
            <b>Home</b>
          </p>
          <p className="home">Food</p>
          <p className="home">Shop</p>
          <p className="home">Support</p>
          <p className="chat">Chat</p>
        </div>
        <div className="address">
          <p className="home">{`Computer Engineering Student `}</p>
          <p className="home">&nbsp;</p>
          <p className="home">Email: MarketConnect@gmail.com</p>
          <p className="chat">Call : 0884034307</p>
        </div>
        <div className="contact">
          <p className="home">&nbsp;</p>
          <p className="home">Twitter : MarketConnect</p>
          <p className="home">Facebook : MarketConnect</p>
          <p className="chat"> Instagram : MarketConnect</p>
        </div>
        <div className="get-more-info">Get more information about website</div>
      </div>
      <div className="edit-profile">Edit profile</div>
      <div className="firstname">
        <input type="text" className="firstname-child" />
        <div className="first-name">First Name</div>
      </div>
      <div className="email2">
        <input type="text" className="email-child" />
        <div className="email3">Email</div>
      </div>
      <div className="password">
        <input type="text" className="password-child" />
        <div className="email3">Password</div>
      </div>
      <div className="address1">
        <input type="text" className="password-child" />
        <div className="contact-number">Contact Number</div>
      </div>
      <div className="lastname">
        <input type="text" className="lastname-child" />
        <div className="last-name">Last Name</div>
      </div>
      <div className="rectangle-parent">
        <input type="text" className="group-child" />
        <div className="save">Save</div>
      </div>
      <div className="header">
        <div className="marketconnect">MarketConnect</div>
        <div className="menu">
          <div className="menuitem" onClick={onMenuItemContainerClick}>
            <img className="icon" alt="" src="/homeicon.png" />
            <div className="home1">Home</div>
          </div>
          <div className="menuitem" onClick={onMenuItemContainer1Click}>
            <img className="icon" alt="" src="/foodicon.png" />
            <div className="home1"> Food</div>
          </div>
          <div className="menuitem" onClick={onMenuItemContainer2Click}>
            <img className="icon" alt="" src="/shopicon.png" />
            <div className="home1">Shop</div>
          </div>
          <div className="menuitem3" onClick={onMenuItemContainer3Click}>
            <img className="icon" alt="" src="/supporticon.png" />
            <div className="support1">Support</div>
          </div>
          <div className="menuitem4">
            <img className="icon" alt="" src="/profileicon.png" />
            <div className="profile1">
              <p className="chat"> Profile</p>
            </div>
          </div>
        </div>
      </div>
      <img className="profile-child" alt="" src="/chinjang.png" />
    </div>
  );
};

export default Profile;

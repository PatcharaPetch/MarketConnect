import NavBar from "../components/NavBar";
import "./Profile.scoped.css";

const Profile = () => {
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
          <p className="home">Computer Engineering Student</p>
          <p className="home">Email: MarketConnect@gmail.com</p>
          <p className="chat">Call : 0884034307</p>
        </div>
        <div className="contact">
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
      <NavBar />
      <img className="profile-child" alt="" src="/chinjang.png" />
    </div>
  );
};

export default Profile;

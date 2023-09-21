import NavBar from "../components/NavBar";
import "./Profile.scoped.css";

const Profile = () => {
  return (

    <div className="container">
      <NavBar />
      <div className="main">
        <h1>Edit Profile</h1>
        <div className="pic-profile-box">
          <img src="/chinjang.png" alt="" />
        </div>
        <div className="form-box">
          <form action="" method="post">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="contact">Contact Number</label>
            <input type="text" name="contact" />
            <label htmlFor="changepassword">Change Password</label>
            <input type="password" name="changepassword" />
            <div className="button">
              <button className="cancel-button">Cancel</button>
              <button className="save-button">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import NavBar from "../components/NavBar";
import "./Profile.scoped.css";
import {PopChat} from "../components/PopChat";

const Profile = () => {
  return (

    <div className="container">
      <NavBar />
      <PopChat messages={[]} />
      <div className="main">
        <h1>Edit Profile</h1>
        <div className="pic-profile-box">
          <img src="https://anime.atsit.in/th/wp-content/uploads/2022/07/e0b984e0b88be0b895e0b8b2e0b8a1e0b8b0e0b8aae0b8b2e0b8a1e0b8b2e0b8a3e0b896e0b8abe0b8b2e0b8a2e0b983e0b888e0b983e0b899e0b8ade0b8a7e0b881.webp" alt="" />
        </div>
        <div className="form-box">
          <form action="" method="post">
            <label htmlFor="firstname">FirstName</label>
            <input type="text" name="firstname" />
            <label htmlFor="lastname">Lastname</label>
            <input type="text" name="lastname" />
            <label htmlFor="contact">Contact Number</label>
            <input type="text" name="contact" />
            <label htmlFor="changepicture">Picture</label>
            <input type="file" name="changepicture" />
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

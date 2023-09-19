import "./Register.scoped.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="box">
        <div>
          <div className="title">MarketConnect</div>
          <div className="input-box">
            <input type="text" name="username" id="username" placeholder="Username" />
            <img src="/-icon-person.svg" alt="" />
          </div>
          <div className="input-box">
            <input type="password" name="password" id="password" placeholder="Password" />
            <img src="/-icon-lock-locked.svg" alt="" />
          </div>
          <div className="input-box">
            <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
            <img src="/-icon-lock-locked.svg" alt="" /></div>
        </div>
        <Link to={"/login"}>Register</Link>
      </div>
    </div>
  );
};

export default Register;

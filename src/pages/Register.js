import "./Register.scoped.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <form className="box" action="" method="Post">
        <div>
          <div className="title">MarketConnect</div>
          <div className="input-box">
            <input type="email" name="email" id="email" placeholder="Email" required/>
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
        <Link to={"/verify"}>Register</Link>
      </form>
    </div>
  );
};

export default Register;

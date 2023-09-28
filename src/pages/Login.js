import "./Login.scoped.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="box">
        <div>
          <div className="title">MarketConnect</div>
          <div className="input-box">
            <input type="email" name="Email" id="email" placeholder="Email" required />
            <img src="/-icon-person.svg" alt="" />
          </div>
          <div className="input-box">
            <input type="password" name="password" id="password" placeholder="Password" />
            <img src="/-icon-lock-locked.svg" alt="" />
          </div>
        </div>
      <div className="footer">
        <label htmlFor=""><Link to={"/register"}>Don't have Account? Register here!</Link></label>
        <div className="botton-login"><Link to={"/home"}>Login</Link></div>
      </div>
      </div>
    </div>
  );
};

export default Login;
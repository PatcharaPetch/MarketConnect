import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="main">
      <div className="page">
        <div>
          <div className="marketconnect">MarketConnect</div>
          <div className="boxinput">
            <div className="input">
              <input type="text" name="username" id="username" placeholder="Username" /><img src="/-icon-person.svg" alt="" /></div>
            <div className="input">
              <input type="password" name="password" id="password" placeholder="Password" /><img src="/-icon-lock-locked.svg" alt="" /></div>
          </div>
        </div>
        <Link to={"/profile"}>Login</Link>
      </div>
    </div>
  );
};

export default Login;
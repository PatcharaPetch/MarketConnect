import axios from "axios";
import "./Login.scoped.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3200/login", {
        email: event.target[0].value,
        password: event.target[1].value,
      })
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container">
      <form className="box" onSubmit={handleLogin}>
        <div>
          <div className="title">MarketConnect</div>
          <div className="input-box">
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Email"
              required
            />
            <img src="/-icon-person.svg" alt="" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <img src="/-icon-lock-locked.svg" alt="" />
          </div>
        </div>
        <div className="footer">
          <label htmlFor="">
            <Link to={"/register"}>Don't have Account? Register here!</Link>
          </label>
          <div className="botton-login">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

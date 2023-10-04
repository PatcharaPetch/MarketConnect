import axios from "axios";
import "./Register.scoped.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    if (event.target[1].value !== event.target[2].value)
      return alert("Password and comfrim Password does not match.");
    axios
      .post("http://localhost:3200/register", {
        email: event.target[0].value,
        password: event.target[1].value,
      })
      .then((res) => {
        navigate("/verify", {
          state: {
            email: event.target[0].value,
          },
        });
      })
      .catch((err) => {
        alert("This email has been use.");
      });
  };

  return (
    <div className="container">
      <form className="box" onSubmit={handleRegister}>
        <div>
          <div className="title">MarketConnect</div>
          <div className="input-box">
            <input
              type="email"
              name="email"
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
          <div className="input-box">
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
            />
            <img src="/-icon-lock-locked.svg" alt="" />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
import { useCallback } from "react";
import "./Register.css";
const Register = () => {
  const onButtonRegisterContainerClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className="main">
      <div className="page">
        <div className="div" />
        <div className="password">
          <div className="passwordinput" />
          <img
            className="icon-lock-locked"
            alt=""
            src="/-icon-lock-locked.svg"
          />
          <div className="confirm-password">Confirm Password</div>
        </div>
        <div
          className="button-register"
          onClick={onButtonRegisterContainerClick}
        >
          <div className="button" />
          <b className="register1">Register</b>
        </div>
        <div className="username">
          <div className="passwordinput" />
          <img className="icon-person" alt="" src="/-icon-person.svg" />
          <div className="username1">UserName</div>
        </div>
        <div className="password1">
          <div className="passwordinput" />
          <img
            className="icon-lock-locked"
            alt=""
            src="/-icon-lock-locked.svg"
          />
          <div className="confirm-password">Password</div>
        </div>
      </div>
      <div className="marketconnect">MarketConnect</div>
    </div>
  );
};

export default Register;

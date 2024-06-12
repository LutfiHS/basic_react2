import Forms from "./signup/Signup_form";
import pln from "../assets/plan.png";
import "./Signup.css";
function Signup() {
  return (
    <div>
      <div className="login-wrapper">
        <div className="login-container">
          <Forms />
          <img className="plan-image" src={pln} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Signup;

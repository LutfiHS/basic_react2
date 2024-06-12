import Forms from "./login/login_form";
import pln from "../assets/plan.png";
import "./Login.css";
function Login() {
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

export default Login;

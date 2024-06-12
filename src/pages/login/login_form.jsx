import "./login_form.css";
import line from "../../assets/Line.png";
import iconGoogle from "../../assets/icon-google.png";
import iconApple from "../../assets/icon-apple.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Forms() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);
  const navigate = useNavigate();

  const handleChangeUsername = (event) => {
    setUserName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      username: userName,
      password: password,
    };

    try {
      const res = await axios.post("https://api.mudoapi.tech/login", payload);
      const token = res.data.data.token;
      setToken(token);
      localStorage.setItem("access_token", token);
      setErrorLogin(null);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setErrorLogin(error.response.data.message);
      setToken(null);
    }
  };

  const handlebtnvisible = () => {
    if (!userName.length || !password.length) {
      return true;
    }
    return false;
  };

  const handleCheck = () => {
    if (errorLogin) {
      return <p>{errorLogin}</p>;
    } else if (token) {
      return <p>{"login success"}</p>;
    }

    return null;
  };

  console.log(userName, password);

  return (
    <div className="Form-wrapper">
      <div className="form-container">
        <div className="input-container">
          <h1 className="title-form">Sign In</h1>
          {handleCheck()}
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChangeUsername}
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChangePassword}
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="check-agreement">
          <input type="checkbox" id="agreement" />
          <label htmlFor="agreement">
            I agree to the{" "}
            <span>
              <a href="">terms & policy</a>
            </span>
          </label>
        </div>
        <button disabled={handlebtnvisible()} onClick={handleSubmit}>
          Signin
        </button>
        <img className="line-image" src={line} alt="" />
        <div className="optional-container">
          <a href="">
            <img src={iconGoogle} alt="" />
            Sign in with Google
          </a>
          <a href="">
            <img src={iconApple} alt="" />
            Sign in with Apple
          </a>
        </div>
      </div>
    </div>
  );
}

export default Forms;

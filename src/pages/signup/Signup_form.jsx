import "./Signup_form.css";
import line from "../../assets/Line.png";
import iconGoogle from "../../assets/icon-google.png";
import iconApple from "../../assets/icon-apple.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Forms() {
  const [Name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState(null);
  const [idUser, setIduser] = useState(null);
  const [successRegister, setSuccessRegister] = useState(null);
  const navigate = useNavigate();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleChangeUsername = (event) => {
    setUserName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      name: Name,
      username: userName,
      password: password,
      roleId: 1,
    };

    try {
      const res = await axios.post(
        "https://api.mudoapi.tech/register",
        payload
      );
      console.log(res);
      setErrorRegister(null);
      setIduser(res.data.data.id);
      setSuccessRegister(res.data.message);

      setInterval(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      setErrorRegister(error.response.data.message);
      setIduser(null);
      setSuccessRegister(null);
    }
  };

  const handlevisible = () => {
    if (!userName.length || !password.length) {
      return true;
    }
    return false;
  };

  const handleRegister = () => {
    if (errorRegister) {
      return <p>{errorRegister}</p>;
    } else if (idUser) {
      return <p>{successRegister}</p>;
    }
    return null;
  };

  return (
    <div className="Form-wrapper">
      <div className="form-container">
        <div className="input-container">
          <h1 className="title-form">Get Started Now</h1>
          {handleRegister()}

          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleName}
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="input-field">
            <label htmlFor="username">username</label>
            <input
              onChange={handleChangeUsername}
              type="text"
              id="username"
              placeholder="Enter your name"
            />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
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
        <button disabled={handlevisible()} onClick={handleSubmit}>
          Signup
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
        <h4 className="have-account">
          Already have an account? <a href="/">Sign In</a>
        </h4>
      </div>
    </div>
  );
}

export default Forms;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Newmenu = () => {
  const Navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "",
    imageurl: "",
    price: "",
  });

  const handleOnChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const payload = {
      ...form,
      price: parseInt(form.price),
    };

    try {
      const res = axios.post("https://api.mudoapi.tech/menu", payload, config);
      console.log(res);
      setTimeout(() => {
        Navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(form);

  return (
    <div>
      <input
        onChange={handleOnChange}
        type="text"
        name="name"
        placeholder="Enter your name"
      />
      <input
        onChange={handleOnChange}
        type="text"
        name="description"
        placeholder="Enter your description"
      />
      <select
        defaultValue=""
        onChange={handleOnChange}
        name="type"
        placeholder="Enter type"
      >
        <option value="">type</option>
        <option value="beverage">test</option>
        <option value="main-dish">main-dish</option>
      </select>
      <input
        onChange={handleOnChange}
        type="text"
        name="imageurl"
        placeholder="Enter your imageurl"
      />
      <input
        onChange={handleOnChange}
        type="text"
        name="price"
        placeholder="Enter price"
      />
      <button style={{ width: "100px", height: "20px" }} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Newmenu;

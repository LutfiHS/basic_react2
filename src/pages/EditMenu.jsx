import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Editmenu = () => {
  const { id } = useParams();
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);
  const [menus, setMenus] = useState({});
  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "",
    imageUrl: "",
    price: "",
  });

  const handleOnChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const getItems = async () => {
    try {
      const res = await axios.get(`https://api.mudoapi.tech/menu/${id}`);
      const datas = res.data.data;
      console.log(res);
      setMenus(datas);
      setErrors(null);
      setSuccess("success");
      console.log(success);
    } catch (error) {
      console.log(error);
      setErrors("failed");
      setSuccess(null);
      console.log(errors);
    }
  };

  const handleSubmit = async () => {
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
      const res = await axios.put(
        `https://api.mudoapi.tech/menu/${id}`,
        payload,
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    setForm(menus);
  }, [menus]);
  console.log(form);

  return (
    <div>
      <h1>Editmenu: {id}</h1>
      <input
        defaultValue={menus.name}
        onChange={handleOnChange}
        type="text"
        name="name"
        // placeholder="Enter your name"
      />
      <input
        onChange={handleOnChange}
        defaultValue={menus.description}
        type="text"
        name="description"
        // placeholder="Enter your description"
      />
      <select
        onChange={handleOnChange}
        defaultValue={menus.type}
        name="type"
        placeholder="Enter type"
      >
        {/* <option value="">type</option> */}
        <option value="beverage">beverage</option>
        <option value="main-dish">main-dish</option>
      </select>
      <input
        onChange={handleOnChange}
        defaultValue={menus.imageUrl}
        type="text"
        name="imageurl"
        // placeholder="Enter your imageurl"
      />
      <input
        onChange={handleOnChange}
        defaultValue={menus.price}
        type="text"
        name="price"
        // placeholder="Enter price"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Editmenu;

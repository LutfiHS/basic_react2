import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [menus, setMenus] = useState([]);
  const [page, setPage] = useState(1);

  const getItems = async () => {
    try {
      const res = await axios.get(`https://api.mudoapi.tech/menus?perPage=40`);
      const datas = res.data.data.Data;
      // console.log(res);
      setMenus(datas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);
  // console.log(menus);
  const handleDelete = async (id) => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await axios.delete(
        `https://api.mudoapi.tech/menu/${id}`,
        config
      );
      getItems();
    } catch (error) {
      console.log(error?.response);
    }
  };
  return (
    <div>
      <h1>Home</h1>
      {menus.map((menu) => (
        <div key={menu.id}>
          <Link to={`/editmenu/${menu.id}`}>
            <h3>{menu.name}</h3>
            <img style={{ width: "150px" }} src={menu.imageUrl} alt="" />
          </Link>
          <p>{menu.price}</p>
          <button onClick={() => handleDelete(menu.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;

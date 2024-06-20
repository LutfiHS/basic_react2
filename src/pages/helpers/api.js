import axios from "axios";

axios.interceptors.request.use((config) => {
  if (config.auth) {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }
  (error) => {
    return Promise.reject(error);
  };
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status === 401) {
      console.log("anda tidak memiliki akses");
    }
    return Promise.reject(err);
  }
);

export default axios;

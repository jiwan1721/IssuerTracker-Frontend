import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/";
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

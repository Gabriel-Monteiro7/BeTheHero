import axios from "axios";

const api = axios.create({
  baseURL: "https://beheros.herokuapp.com/"
});
export default api;

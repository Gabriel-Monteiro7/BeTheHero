import axios from "axios";

const api = axios.create({
  //https://locahost:3333  ->> Se for rodar local
  baseURL: "https://beheros.herokuapp.com/"
});
export default api;

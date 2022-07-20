import axios from "axios";

const uri = process.env.REACT_APP_API;
const api = axios.create({
  baseURL: uri,
});

export default api;

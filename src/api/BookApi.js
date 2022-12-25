import axios from "axios";

// Backend API object
export default axios.create({
  baseURL: "http://localhost:8080/",
});

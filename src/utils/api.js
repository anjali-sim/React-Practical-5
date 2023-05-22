import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL,
});

const fetchUsersFromApi = (page) => {
  console.log(baseURL);
  return instance.get(`users?page=${page}`);
};

export default fetchUsersFromApi;

import axios from "axios";
import { baseURL } from "@src/config/env";

const instance = axios.create({
  baseURL,
});

const fetchUsersFromApi = (page) => {
  return instance.get(`users?page=${page}`);
};

export default fetchUsersFromApi;

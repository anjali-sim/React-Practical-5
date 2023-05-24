import axios from "axios";
import { baseURL } from "@src/config/env";

const instance = axios.create({
  baseURL,
});

const httpService = {
  get: (url, params) => instance.get(url, { params }),
};

export default httpService;

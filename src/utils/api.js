import axios from "axios";

// used axios to get the API
const fetchUsersFromApi = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`);
};

export default fetchUsersFromApi;

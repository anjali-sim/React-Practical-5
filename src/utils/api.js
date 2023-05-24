import httpService from "../services/httpService";

const fetchUsersFromApi = (page) => {
  return httpService.get(`users?page=${page}`);
};

export default fetchUsersFromApi;

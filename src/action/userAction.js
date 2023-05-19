import fetchUsersFromApi from "../utils/api";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actionTypes";

// Action Creators
export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

// Async Action
export const fetchUsers = (page) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersRequest());
      const response = await fetchUsersFromApi(page);
      const users = response.data.data;
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    } finally {
      console.log("Fetch Users Completed");
    }
  };
};

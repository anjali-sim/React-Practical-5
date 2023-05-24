import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "@src/actions/actionTypes";
import { combineReducers } from "redux";

// Initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_USERS_SUCCESS:
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const userSuccessReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    default:
      return state;
  }
};

const userFailureReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: userRequestReducer,
  user1: userSuccessReducer,
  user2: userFailureReducer,
});

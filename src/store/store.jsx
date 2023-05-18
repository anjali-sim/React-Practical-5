import { createStore } from "redux";
import userReducer from "@src/reducer/userReducer";

const store = createStore(userReducer);

export default store;

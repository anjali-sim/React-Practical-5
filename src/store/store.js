import { createStore } from "redux";
import { rootReducer } from "@src/reducers/userReducer";

const store = createStore(rootReducer);

export default store;

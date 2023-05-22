import { createStore } from "redux";
import { rootReducer } from "@src/reducer/userReducer";

const store = createStore(rootReducer);

export default store;

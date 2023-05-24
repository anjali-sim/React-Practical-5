import { legacy_createStore as createStore } from 'redux';
import { userReducer } from "@src/reducers/userReducer";

const store = createStore(userReducer);

export default store;

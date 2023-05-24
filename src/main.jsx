import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "@src/styled/GlobalStyle.style";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux';
import thunk from "redux-thunk";
import userReducer from "@src/reducers/userReducer.js";

const store = createStore(userReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);

import React, { useEffect } from "react";
import "./App.scss";
import { LOGOUT } from "./actions/types";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
      <div className="app">
        <div className="test">
          <p>TEST</p>
        </div>
      </div>
    </Provider>
  );
};

export default App;

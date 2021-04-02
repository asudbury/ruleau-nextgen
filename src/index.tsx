import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './services/stores';
import Protect from "./components/Protect";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Protect />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

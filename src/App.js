import React from "react";
import AppRoutes from "./shared/routes/AppRoutes";
import store from "./shared/redux/store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;

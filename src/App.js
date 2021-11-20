import React from "react";
import AppRoutes from "./shared/routes/AppRoutes";
import store from "./shared/redux/store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-Backgroundprimary font-Lalezar text-bodytext">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;

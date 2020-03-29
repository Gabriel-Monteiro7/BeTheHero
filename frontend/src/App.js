import React from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./config/ReactotronConfig";
import Routes from "./routes";
import history from "./service/history";
import { persistor, store } from "./store";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
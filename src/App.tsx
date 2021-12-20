import React from 'react';
// import Chart from "./Components/chart";;
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Dashboard} from "./Containers/Dashboard";
import { Provider } from "react-redux";
import Home from "./Containers/Home";
import store from "./Redux/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />;
      </Provider>
    </>
  )
}

export default App;

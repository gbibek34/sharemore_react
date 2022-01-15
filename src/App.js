import "./App.css";

import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

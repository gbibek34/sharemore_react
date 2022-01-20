import "./App.css";
import "./assets/css/Header.css";
import "./assets/css/Footer.css";

import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

import "./App.css";
import "./assets/css/Header.css";
import "./assets/css/Footer.css";
import "./assets/css/PostCard.css";
import "./assets/css/Post.css";
import "./assets/css/Login.css";
import "./assets/css/Categories.css";
import "./assets/css/PostForm.css";

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

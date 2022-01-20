import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Screens/Home";

const Main = () => {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default Main;

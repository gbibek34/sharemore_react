import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Screens/Home";
import Post from "../Screens/Post";

const Main = () => {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<Post />}></Route>
      </Routes>
    </div>
  );
};

export default Main;

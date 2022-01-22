import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Post from "../Screens/Post";
import PostForm from "./PostForm";

const Main = () => {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/post/create" element={<PostForm />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default Main;

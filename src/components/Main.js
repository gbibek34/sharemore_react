import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "../context/Context";

import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Post from "../Screens/Post";
import Register from "../Screens/Register";
import PostForm from "./PostForm";

const Main = () => {
  const { user } = useContext(Context);
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:post_id" element={<Post />}></Route>
        <Route path="/post/create" element={<PostForm />}></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Main;

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "../context/Context";

import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Post from "../Screens/Post";
import Register from "../Screens/Register";
import PostForm from "./PostForm";

const Main = () => {
  const { user } = useContext(Context);

  const [author, setAuthor] = useState([]);

  useEffect(() => {
    const fetchAuthor = async () => {
      const config = {
        headers: {
          Authorization: "Bearer " + user,
        },
      };
      const res = await axios.get("/user/get", config);
      setAuthor(res.data["msg"]);
    };
    fetchAuthor();
  }, [user]);

  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/post/:post_id"
          element={user ? <Post /> : <Login />}
        ></Route>
        <Route
          path="/post/create"
          element={user ? <PostForm author={author} /> : <Login />}
        ></Route>
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

import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post" + search);
      setPosts(res.data["msg"]);
    };
    fetchPosts();
  }, [search]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/category/");
      setCategories(res.data["msg"]);
      console.log(res.data["msg"]);
    };
    fetchCategories();
  }, []);
  return (
    <>
      <div className="container-fluid p-5">
        <div className="jumbotron bg-opacity-100 shadow-sm text-center">
          <h6 className="display-4 font-serifppb" style={{ color: "#4F6367" }}>
            Welcome to Sharemore
          </h6>
          <p className="lead font-serifqs">
            Sharemore is the most effective content sharing platform for
            everyone.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-10 px-3">
            <h2
              className="text-center mb-4 font-serifqs"
              style={{ fontWeight: 800, color: "#4F6367" }}
            >
              Recent Blogs
            </h2>
            <div className="row">
              {posts.map((post) => (
                <div className="col-lg-4" key={post._id}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-2 px-3 home-categories">
            <h2
              className="text-center mb-4 font-serifqs"
              style={{ fontWeight: 800, color: "#4F6367" }}
            >
              Categories
            </h2>
            <ul>
              {categories.map((category) => (
                <Link
                  to={`/posts/?categories=${category.name}`}
                  key={category._id}
                  style={{ textDecoration: "none" }}
                >
                  <li>{category.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

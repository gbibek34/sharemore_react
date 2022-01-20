import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

const Home = () => {
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
          <div className="col-lg-9 px-3">
            <h4
              className="text-center mb-4 font-serifqs"
              style={{ fontWeight: 800, color: "#4F6367" }}
            >
              Recent Blogs
            </h4>
            <div className="row">
              <div className="col-lg-4">
                <PostCard />
              </div>
              <div className="col-lg-4">
                <PostCard />
              </div>
              <div className="col-lg-4">
                <PostCard />
              </div>
            </div>
          </div>
          <div className="col-lg-3 px-3 home-categories">
            <h4
              className="text-center mb-4 font-serifqs"
              style={{ fontWeight: 800, color: "#4F6367" }}
            >
              Categories
            </h4>
            <ul>
              <li>Life</li>
              <li>Music</li>
              <li>Sports</li>
              <li>Gaming</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

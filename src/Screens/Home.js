import React from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";

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
          <div className="col-md-9 px-3">
            <h4>Recent Blogs</h4>
            <div className="row">
              <div className="col-md-6">
                <Post />
              </div>
              <div className="col-md-6">
                <Post />
              </div>
            </div>
          </div>
          <div className="col-md-3 px-3">
            <h4>Categories</h4>
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

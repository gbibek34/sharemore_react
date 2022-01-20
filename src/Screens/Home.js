import React from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <div className="container mt-5">
        <div className="jumbotron bg-opacity-100 shadow-sm">
          <h6 className="display-4 font-serifms">Welcome to Sharemore</h6>
          <p className="lead font-serifqs">
            Sharemore is the most effective content sharing platform for
            everyone.
          </p>
          <Link to="/more" className=" btn btn-login m-2 px-4">
            More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

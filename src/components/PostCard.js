import React from "react";
import postimg from "../assets/images/dummy_img.jpg";
import userimg from "../assets/images/login.png";

const Post = () => {
  return (
    <>
      <div className="">
        <div className="card shadow-sm post-card">
          <div className="overflow">
            <img src={postimg} alt="" className="card-img-top post-image" />
          </div>
          <div className="card-body text-dark p-3">
            <p className="post-category">Music</p>
            <h4
              className="post-title"
              style={{ fontWeight: 700, color: "#4F6367" }}
            >
              React
            </h4>
            <p className="post-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis error deserunt magni placeat maiores atque in dolorem
              quis consequatur accusantium quos iusto excepturi tempore
              dignissimos ea numquam magnam, accusamus vero?
            </p>
            <div className="author-details">
              <img src={userimg} alt="" className="author-img" />
              <p className="ml-3 author-name-time mb-0">
                <span style={{ fontWeight: 600 }}>Bibek Ghimire</span>
                <span>2:30 Thursday</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

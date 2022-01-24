import React from "react";
import { Link } from "react-router-dom";
// import postimg from "../assets/images/dummy_img.jpg";
import userimg from "../assets/images/login.png";

const Post = ({ post }) => {
  return (
    <>
      <Link to={`/post/${post._id}`} style={{ textDecoration: "none" }}>
        <div className="card shadow-sm post-card">
          <div className="overflow">
            {post.image && (
              <img
                src={post.photo}
                alt=""
                className="card-img-top post-image"
              />
            )}
          </div>
          <div className="card-body text-dark p-3">
            <p className="post-category">
              {/* {post.categories.map((category) => (
                <span>{category.name}</span>
              ))} */}
            </p>
            <h4
              className="post-title"
              style={{ fontWeight: 700, color: "#4F6367" }}
            >
              {post.title}
            </h4>
            <p className="post-description">{post.description}</p>
            <div className="author-details">
              <img src={userimg} alt="" className="author-img" />
              <p className="ml-3 author-name-time mb-0">
                <span style={{ fontWeight: 600 }}>{post.username}</span>
                <span>{new Date(post.updatedAt).toDateString()}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Post;

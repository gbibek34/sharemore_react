import React from "react";
import { Link } from "react-router-dom";
import userimg from "../assets/images/login.png";

const Post = ({ post }) => {
  const publicFolder = "http://localhost:5000/uploads/";
  return (
    <>
      <div className="card shadow-sm post-card">
        <div className="overflow">
          {post.image && (
            <img
              src={publicFolder + post.image}
              alt=""
              className="card-img-top post-image"
            />
          )}
        </div>
        <div className="card-body text-dark p-3">
          <p className="post-category">
            {post.categories.map((category, index) => (
              <span key={index}>{category.name}</span>
            ))}
          </p>
          <Link to={`/post/${post._id}`} style={{ textDecoration: "none" }}>
            <h4
              className="post-title"
              style={{ fontWeight: 700, color: "#4F6367" }}
            >
              {post.title}
            </h4>
          </Link>
          <p className="post-description">{post.description}</p>
          <div className="author-details">
            <img src={userimg} alt="" className="author-img" />
            <p className="ml-3 author-name-time mb-0">
              <Link
                to={`/?user=${post.username}`}
                style={{ textDecoration: "none" }}
              >
                <span style={{ fontWeight: 600, color: "#4F6367" }}>
                  {post.username}
                </span>
              </Link>
              <span>{new Date(post.updatedAt).toDateString()}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

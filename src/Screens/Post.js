import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import * as Bs from "react-icons/bs";
import * as Fi from "react-icons/fi";
import userimg from "../assets/images/login.png";
import background from "../assets/images/dummy_img.jpg";
import axios from "axios";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      setPost(res.data["msg"]);
    };
    getPost();
  }, [path]);

  console.log(post);

  return (
    <>
      <div className="container-fluid p-5">
        <div
          className="text-center text-white p-3"
          style={{
            backgroundImage: `url(${background})`,
            opacity: "0.5",
            borderRadius: "10px",
          }}
        >
          <Dropdown className="post-dropdown">
            <Dropdown.Toggle variant="link" bsPrefix="p-0">
              <Bs.BsThreeDots />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="#">
                  <Fi.FiEdit3 />
                  Edit
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Link to="#">
                  <Fi.FiTrash />
                  Delete
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div>
            {post.categories &&
              post.categories.map((category, index) => (
                <p key={index}>{category}</p>
              ))}
          </div>
          <h1>{post.title}</h1>
          <div>
            <img src={userimg} alt="" className="post-user-image" />
            <p>{post.username}</p>
            <p>{new Date(post.updatedAt).toDateString()}</p>
          </div>
        </div>
        <div className="px-4 py-5 post-desc-cont">
          {post.image && (
            <img src={post.photo} alt="" className="post-img-main" />
          )}

          <p className="px-5 post-desc-main font-serifpp">{post.description}</p>
        </div>
      </div>
    </>
  );
};

export default Post;

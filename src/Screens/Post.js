import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import * as Bs from "react-icons/bs";
import * as Fi from "react-icons/fi";
import axios from "axios";
import { Context } from "../context/Context";

const Post = ({ author }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const publicFolder = "http://localhost:5000/uploads/";
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      setPost(res.data["msg"]);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    console.log("/post/delete" + path);
    const config = { headers: { Authorization: "Bearer " + user } };
    await axios.delete("/post/delete/" + path, config);

    window.location.replace("/");
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [update, setUpdate] = useState(false);

  // const handleEdit = async () => {};

  return (
    <>
      <div className="container-fluid p-5">
        <div
          className="text-center text-white p-3"
          style={{
            // backgroundImage: `url(${background})`,
            opacity: "0.5",
            borderRadius: "10px",
          }}
        >
          {post.username === author.username && (
            <Dropdown className="post-dropdown">
              <Dropdown.Toggle variant="link" bsPrefix="p-0">
                <Bs.BsThreeDots />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <button onClick={() => setUpdate(true)}>
                    <Fi.FiEdit3 />
                    Edit
                  </button>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <button onClick={handleDelete}>
                    <Fi.FiTrash />
                    Delete
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          <div>
            {post.categories &&
              post.categories.map((category, index) => (
                <p key={index}>{category}</p>
              ))}
          </div>
          <h1>{post.title}</h1>
          <div>
            {/* <img src={userimg} alt="" className="post-user-image" /> */}
            <p>{post.username}</p>
            <p>{new Date(post.updatedAt).toDateString()}</p>
          </div>
        </div>
        <div className="px-4 py-5 post-desc-cont">
          {post.image && (
            <img
              src={publicFolder + post.image}
              alt=""
              className="post-img-main"
            />
          )}

          <p className="px-5 post-desc-main font-serifpp">{post.description}</p>
        </div>
      </div>
    </>
  );
};

export default Post;

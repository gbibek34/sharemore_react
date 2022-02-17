import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import * as Bs from "react-icons/bs";
import * as Fi from "react-icons/fi";
import axios from "axios";
import { Context } from "../context/Context";
import brynxie from "../assets/images/brynxie.jpg";

const Post = ({ author }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const publicFolder = "http://localhost:5000/uploads/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      setPost(res.data["msg"]);
      setTitle(res.data["msg"].title);
      setDescription(res.data["msg"].description);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    // console.log("/post/delete" + path);
    const config = { headers: { Authorization: "Bearer " + user } };
    await axios.delete("/post/delete/" + path, config);

    window.location.replace("/");
  };

  const handleUpdate = async () => {
    const config = { headers: { Authorization: "Bearer " + user } };
    console.log("/post/update/" + path, config);
    const res = await axios.put(
      "/post/update/" + path,
      {
        title,
        description,
      },
      config
    );
    console.log(res);
    console.log(config);
    window.location.reload();
  };

  return (
    <>
      <div className="container-fluid p-5">
        <div className="spost-background"></div>
        <div className="spost-container">
          <div className="spost-headers">
            {updateMode ? (
              <input
                type="text"
                value={title}
                style={{
                  fontSize: "3rem",
                  fontWeight: 600,
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  border: "none",
                }}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <h2>{post.title}</h2>
            )}

            {post.username === author.username && (
              <Dropdown className="spost-dropdown">
                <Dropdown.Toggle variant="link" bsPrefix="p-0">
                  <Bs.BsThreeDots style={{ color: "#000" }} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setUpdateMode(true)}>
                    <Fi.FiEdit3 className="mr-3" />
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleDelete}>
                    <Fi.FiTrash className="mr-3" />
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
          <div className="spost-profile-container">
            <div className="spost-profile">
              <div>
                <img src={brynxie} alt="" className="spost-img-container" />
              </div>
              <div className="spost-user-details">
                <h4>{post.username}</h4>
                <p>{new Date(post.updatedAt).toDateString()}</p>
              </div>
            </div>
            <div className="spost-categories">
              {post.categories &&
                post.categories.map((category, index) => (
                  <Link to="." key={index}>
                    {category}
                  </Link>
                ))}
            </div>
          </div>
          {updateMode ? (
            <>
              <textarea
                type="text"
                id="description"
                value={description}
                className="spost-description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <button className="btn btn-wide" onClick={handleUpdate}>
                Update
              </button>
            </>
          ) : (
            <p className="spost-description">{post.description}</p>
          )}
          <div className="text-center">
            {post.image && (
              <img
                src={publicFolder + post.image}
                className="spost-image"
              ></img>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

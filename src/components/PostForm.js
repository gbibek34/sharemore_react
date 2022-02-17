import axios from "axios";
import React, { useContext, useState } from "react";
import * as Fi from "react-icons/fi";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const PostForm = (author) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;
      await axios.post("/upload", data);
    }
    try {
      const config = { headers: { Authorization: "Bearer " + user } };
      const res = await axios.post("/post/create", newPost, config);
      window.location.replace("/post/" + res.data.post._id);
    } catch (err) {}
  };

  return (
    <>
      <div className="container-fluid p-5 post-form-container">
        <div className="post-form-div">
          <h1>Tell us your story</h1>
          <form onSubmit={handleSubmit}>
            <div className="post-form-row">
              <div className="column">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Title Here"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="column">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  id="description"
                  placeholder="Enter your description here"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="column">
                <label>Image Preview</label>
              </div>
              <div className="column">
                {file && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="post-form-image"
                  />
                )}
              </div>
              <div className="column">
                <label htmlFor="fileinput" className="btn btn-wide">
                  <Fi.FiPlus className="mr-3" />
                  Add Image
                </label>
                <input
                  type="file"
                  id="fileinput"
                  style={{ display: "none" }}
                  className="btn btn-wide"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div className="column">
                <button type="submit" className="btn btn-wide">
                  Publish
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostForm;

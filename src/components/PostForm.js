import axios from "axios";
import React, { useContext, useState } from "react";
import * as Fi from "react-icons/fi";
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
    <div className="container-fluid p-5">
      <div className="jumbotron shadow-sm text-center text-dark p-3">
        <h1 className="mt-3">Tell everyone your story</h1>
      </div>
      <form className="p-5" onSubmit={handleSubmit}>
        <div>
          <h1>Preview</h1>
          {file && <img src={URL.createObjectURL(file)} alt="" />}
        </div>
        <div>
          <label htmlFor="fileinput">
            <Fi.FiPlus />
          </label>
          <input
            type="file"
            id="fileinput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default PostForm;

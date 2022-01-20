import React from "react";
import * as Fi from "react-icons/fi";
import background from "../assets/images/dummy_img.jpg";

const PostForm = () => {
  return (
    <div className="container-fluid p-5">
      <div
        className="text-center text-white p-3"
        style={{
          backgroundImage: `url(${background})`,
          opacity: "0.5",
          borderRadius: "10px",
          height: "30vh",
        }}
      >
        <h1 className="mt-5">Tell everyone your story</h1>
      </div>
      <form className="p-5">
        <div>
          <label htmlFor="fileimput">
            <Fi.FiPlus />
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" />
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
};

export default PostForm;

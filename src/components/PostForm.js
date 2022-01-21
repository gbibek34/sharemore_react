import React from "react";
import * as Fi from "react-icons/fi";

const PostForm = () => {
  return (
    <div className="container-fluid p-5">
      <div className="jumbotron shadow-sm text-center text-dark p-3">
        <h1 className="mt-3">Tell everyone your story</h1>
      </div>
      <form className="p-5">
        <div>
          <label htmlFor="fileinput">
            <Fi.FiPlus />
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" />
        </div>
        <div>
          <textarea type="text" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Publish</button>
      </form>
    </div>
  );
};

export default PostForm;

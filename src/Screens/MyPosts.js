import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PostCard from "../components/PostCard";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post" + search);
      setPosts(res.data["msg"]);
    };
    fetchPosts();
  }, [search]);
  return (
    <div className="container-fluid p-5">
      <div className="row">
        {posts.map((post) => (
          <div className="col-lg-4" key={post._id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;

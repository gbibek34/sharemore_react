import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Login = () => {
  const refUsername = useRef();
  const refPassword = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    const res = await axios.post("/user/login", {
      username: refUsername.current.value,
      password: refPassword.current.value,
    });
    console.log(res.data["msg"]);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data["token"] });
    if (res.data["success"] === false) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log("nyeh");
    }
  };
  return (
    <>
      <div className="container-fluid p-5">
        <div>
          <span>Login</span>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username..."
              ref={refUsername}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password..."
              ref={refPassword}
            />
            <button type="submit" disabled={isFetching}>
              Login
            </button>
          </form>
          <button>
            <Link className="link" to="/register">
              Register
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

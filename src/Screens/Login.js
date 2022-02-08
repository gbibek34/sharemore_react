import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Context } from "../context/Context";
import loginpgimg from "../assets/images/reading.svg";
import loginfrmimg from "../assets/images/login.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const refUsername = useRef();
  const refPassword = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    const res = await axios.post("/user/login", {
      username: refUsername.current.value,
      password: refPassword.current.value,
    });
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data["token"] });
    if (res.data["success"] === false) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mt-5">
            <div className="text-center">
              <img src={loginfrmimg} alt="" className="center login-img mb-5" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="usernameholder">Username:</label>
                <input
                  type="text"
                  placeholder="Username"
                  id="usernameholder"
                  ref={refUsername}
                  className="form-control mb-3"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordholder">Password:</label>
                <input
                  type="password"
                  placeholder="Password"
                  id="passwordholder"
                  ref={refPassword}
                  className="form-control mb-3"
                  required
                />
              </div>
              {error && <span>Username or Password Invalid</span>}
              <button
                type="submit"
                className="btn btn-block btn-wide"
                disabled={isFetching}
              >
                Login
              </button>
              <Link to="/register">
                <button className="btn btn-block btn-wide">Register</button>
              </Link>
            </form>
          </div>
          <div className="col-lg-8">
            <img src={loginpgimg} alt="" className="mx-5 login-illustration" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

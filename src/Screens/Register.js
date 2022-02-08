import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginpgimg from "../assets/images/phoning.svg";
import loginfrmimg from "../assets/images/register.svg";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/user/register", {
      username,
      email,
      password,
    });

    setError(false);
    if (res.data["success"] === true) {
      window.location.replace("/login");
      console.log("reg");
    } else {
      setError(true);
      console.log("nreg");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <img src={loginpgimg} alt="" className="login-illustration" />
          </div>
          <div className="col-lg-4 mt-5 p-3">
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
                  onChange={(data) => setUsername(data.target.value)}
                  className="form-control mb-3"
                />
              </div>
              <div className="form-group">
                <label htmlFor="emailholder">Email:</label>
                <input
                  type="email"
                  placeholder="E-mail"
                  id="emailholder"
                  onChange={(data) => setEmail(data.target.value)}
                  className="form-control mb-3"
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordholder">Password:</label>
                <input
                  type="password"
                  placeholder="Password"
                  id="passwordholder"
                  onChange={(data) => setPassword(data.target.value)}
                  className="form-control mb-3"
                />
              </div>
              {error && <span>Cannot Register</span>}
              <button
                type="submit"
                className="btn btn-block btn-wide"
                // disabled={isFetching}
              >
                Register
              </button>
              <Link to="/login">
                <button className="btn btn-block btn-wide">Login</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

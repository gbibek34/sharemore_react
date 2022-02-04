import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="container-fluid p-5">Register</div>
      <div className="register">
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your username..."
            onChange={(data) => setUsername(data.target.value)}
            required
          />
          <label>Email</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your email..."
            onChange={(data) => setEmail(data.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password..."
            onChange={(data) => setPassword(data.target.value)}
            required
          />
          <button className="registerButton" type="submit">
            Register
          </button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        {error && <span>Cannot Register</span>}
      </div>
    </>
  );
};

export default Register;

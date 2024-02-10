import React, { useState } from "react";
import "./Register.css";
import "../../App.css";
import { Link } from "react-router-dom";
import Axios from "axios";

import video from "../../img/video2.mp4";
// import logo from "../../img/logo.jpg";

import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export const Register = () => {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // onClick function
  const createUser = () => {
    Axios.post("http://localhost:3002/register", {
      // create variable to send to the server though the router
      Username: userName,
      Email: email,
      Password: password,
    }).then(() => {
      console.log("User has been Create");
    });
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="footerDiv flex">
            <span className="text">Have an account</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            {/* <img src={logo} alt="Logo Image" /> */}
            <h3>SignUp Know</h3>
          </div>
          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="name">username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter UserName"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdEmail className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>
            <button onClick={createUser} type="submit" className="btn flex">
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>
            <span className="forgotPassword">
              Forgot Your Password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

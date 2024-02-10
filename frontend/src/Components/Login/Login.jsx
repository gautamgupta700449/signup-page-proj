import React, { useEffect, useState } from "react";
import "./Login.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

import video from "../../img/video2.mp4";
import logo from "../../img/logo.jpg";

import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

export const Login = () => {
  // Usestate Hook to store inputs
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigateTo = useNavigate();

  // Now show the message to the user
  const [loginStatus, setLoginStatus] = useState("");
  const [statusHolder, setStatusHolder] = useState("message");

  // onClick function
  const loginUser = (e) => {
    //lets prevent submitting
    e.preventDefault();
    Axios.post("http://localhost:3002/login", {
        // create variable to send to the server though the router
        LoginUserName: loginUserName,
        LoginPassword: loginPassword,
      })
      .then((response) => {
        console.log();
        if (
          response.data.message ||
          loginUserName == "" ||
          loginPassword == ""
        ) {
          navigateTo("/");
          setLoginStatus("Credentials Don't Exist!");
        } else {
          navigateTo("/Home");
        }
      });
  };

  useEffect(() => {
    if (loginStatus !== "") {
      setStatusHolder("showMessage");
      setTimeout(() => {
        setStatusHolder("message");
      }, 4000);
    }
  }, [loginStatus]);

  // clear the form on submit
  const onSubmit = () => {
    setLoginUserName("");
    setLoginPassword("");
  };
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="footerDiv flex">
            <span className="text">Don't have an account</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back</h3>
          </div>
          <form onSubmit={onSubmit} action="" className="form grid">
            <span className={statusHolder}>{loginStatus}</span>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Email"
                  onChange={(event) => {
                    setLoginUserName(event.target.value);
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
                    setLoginPassword(event.target.value);
                  }}
                />
              </div>
            </div>
            <button onClick={loginUser} type="submit" className="btn flex">
              <span>Login</span>
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

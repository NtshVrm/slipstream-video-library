/* eslint-disable react-hooks/exhaustive-deps */
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavBar } from "../../components";
import { ComponentContext } from "../../context/component-context";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useRef } from "react";

export default function Signin() {
  const { sidebarDisplay, sidebar } = useContext(ComponentContext);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const userEmail = useRef("");
  const userPassword = useRef("");
  const navigate = useNavigate();

  const signInHandler = async (loginDetail) => {
    try {
      const response = await axios.post(`/api/auth/login`, loginDetail);
      if (response.status === 200) {
        localStorage.setItem(
          "login",
          JSON.stringify({ token: response.data.encodedToken })
        );
        navigate("/Listing");
      }
      if (response.status === 201) {
        alert("Wrong Password");
      }
    } catch (error) {
      console.log(error);
      alert("No User found with the entered email");
    }
  };

  useEffect(() => {
    (async () => {
      if (loginInfo.email && loginInfo.password !== "") {
        signInHandler(loginInfo);
      }
    })();
  }, [loginInfo]);

  const testFunction = () => {
    setLoginInfo((prev) => ({
      ...prev,
      email: "mock@gmail.com",
      password: "mockPassword",
    }));
  };

  const signInFunction = () => {
    setLoginInfo((prev) => ({
      ...prev,
      email: userEmail.current.value,
      password: userPassword.current.value,
    }));
  };

  if (
    localStorage.getItem("login") !== "{}" &&
    localStorage.getItem("login") !== null
  ) {
    setTimeout(() => {
      navigate("/Listing");
    }, 100);
  }

  return (
    <div className="page-container">
      <NavBar />
      <main className="main-container">
        <div
          className={`sidebar-container ${
            sidebarDisplay ? "sidebar-mobile" : ""
          }`}
        >
          {sidebar.map((item) => {
            return (
              <div className="sidebar-item">
                <FontAwesomeIcon className="sidebar-icon" icon={item.icon} />
                {item.name}
              </div>
            );
          })}
        </div>

        <div className="listing-container">
          <div className="login-container">
            <div className="sign-in-container">
              <div className="sign-in-title">Sign In</div>
              <div className="social-container">
                <div className="social-heading">
                  <div className="social-title">Sign in with</div>
                </div>
                <div className="social-button">
                  <button className="login-item">
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>
                  <button className="login-item">
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button className="login-item">
                    <FontAwesomeIcon icon={faFacebook} />
                  </button>
                </div>
              </div>

              <div className="social-input">
                <div className="input-heading">
                  <div className="input-title">Or continue with</div>
                </div>
                <div className="input">
                  <input
                    type="text"
                    className="text-input"
                    placeholder="mock@gmail.com"
                    // onChange={(e) => {
                    //   setLoginInfo({ ...loginInfo, email: e.target.value });
                    // }}
                    ref={userEmail}
                  />
                  <label className="input-label">Email</label>
                </div>
                <div className="input">
                  <input
                    type="password"
                    className="text-input"
                    placeholder="mockPassword"
                    // onChange={(e) => {
                    //   setLoginInfo({ ...loginInfo, password: e.target.value });
                    // }}
                    ref={userPassword}
                  />
                  <label className="input-label">Password</label>
                </div>
              </div>

              <div className="sign-in-footer">
                <div className="remember">
                  <input type="checkbox" className="remember-me" />
                  <label>Remember me</label>
                </div>
                <Link to="#" className="forgot">
                  Forgot your password?
                </Link>
              </div>

              <button className="test-button" onClick={testFunction}>
                Use Test Credentials
              </button>
              <button className="sign-button" onClick={signInFunction}>
                Sign In
              </button>

              <div className="no-account">
                Don't have an account?
                <Link to="/Signup" className="sign-up-link">
                  Sign up Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

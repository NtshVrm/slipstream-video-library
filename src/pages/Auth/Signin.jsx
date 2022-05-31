/* eslint-disable react-hooks/exhaustive-deps */
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { NavBar, Sidebar } from "../../components";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/auth-context";

export default function Signin() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const userEmail = useRef("");
  const userPassword = useRef("");
  const navigate = useNavigate();
  const { signInHandler } = useContext(AuthContext);

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
        <Sidebar />

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
                    ref={userEmail}
                  />
                  <label className="input-label">Email</label>
                </div>
                <div className="input">
                  <input
                    type="password"
                    className="text-input"
                    placeholder="mockPassword"
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

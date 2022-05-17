import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { NavBar } from "../../components";
import { ComponentContext } from "../../context/component-context";
import "./auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/auth-context";

export default function Signup() {
  const { sidebarDisplay, sidebar } = useContext(ComponentContext);
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const navigate = useNavigate();
  const { signUpHandler } = useContext(AuthContext);

  const signUpFunction = () => {
    if (
      info.email &&
      info.password &&
      info.firstName &&
      info.lastName &&
      info.confirm !== ""
    ) {
      if (info.password === info.confirm) {
        (async () => {
          signUpHandler(info);
        })();
      } else {
        alert("Passwords dont match!");
      }
    } else {
      alert("Please fill in all the fields");
      localStorage.removeItem("token");
      navigate("/Signup");
    }

    if (localStorage.getItem("token")) {
      setTimeout(() => {
        navigate("/Signin");
      }, 500);
    }
  };

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
              <div className="sign-in-title">Register</div>

              <div className="social-input">
                <div className="input">
                  <input
                    type="text"
                    className="text-input"
                    onChange={(e) => {
                      setInfo({ ...info, firstName: e.target.value });
                    }}
                  />
                  <label className="input-label">First Name</label>
                </div>

                <div className="input">
                  <input
                    type="text"
                    className="text-input"
                    onChange={(e) => {
                      setInfo({ ...info, lastName: e.target.value });
                    }}
                  />
                  <label className="input-label">Last Name</label>
                </div>
                <div className="input">
                  <input
                    type="text"
                    className="text-input"
                    onChange={(e) => {
                      setInfo({ ...info, email: e.target.value });
                    }}
                  />
                  <label className="input-label">Email</label>
                </div>
                <div className="input">
                  <input
                    type="password"
                    className="text-input"
                    onChange={(e) => {
                      setInfo({ ...info, password: e.target.value });
                    }}
                  />
                  <label className="input-label">Password</label>
                </div>
                <div className="input">
                  <input
                    type="password"
                    className="text-input"
                    onChange={(e) => {
                      setInfo({ ...info, confirm: e.target.value });
                    }}
                  />
                  <label className="input-label">Confirm Password</label>
                </div>
              </div>

              <button
                className="sign-button"
                onClick={() => {
                  signUpFunction();
                }}
              >
                Sign Up
              </button>

              <div className="no-account">
                Already have an account?
                <Link to="/Signin" className="sign-up-link">
                  Sign in here!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

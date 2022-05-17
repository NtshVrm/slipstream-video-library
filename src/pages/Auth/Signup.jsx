import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavBar } from "../../components";
import { ComponentContext } from "../../context/component-context";
import "./auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Signup() {
  const { sidebarDisplay, sidebar } = useContext(ComponentContext);
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
                  <input type="text" className="text-input" />
                  <label className="input-label">First Name</label>
                </div>
                <div className="input">
                  <input type="text" className="text-input" />
                  <label className="input-label">Last Name</label>
                </div>
                <div className="input">
                  <input type="text" className="text-input" />
                  <label className="input-label">Email</label>
                </div>
                <div className="input">
                  <input type="password" className="text-input" />
                  <label className="input-label">Password</label>
                </div>
                <div className="input">
                  <input type="password" className="text-input" />
                  <label className="input-label">Confirm Password</label>
                </div>
              </div>

              <button className="sign-button">Sign Up</button>

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

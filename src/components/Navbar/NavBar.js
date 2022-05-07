import { faMoon, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ComponentContext } from "../../context/component-context";

export default function NavBar() {
  const { setSidebarDisplay } = useContext(ComponentContext);

  return (
    <nav className="navbar">
      <div className="nav-title">
        <FontAwesomeIcon
          icon={faBars}
          className="navbar-menu"
          onClick={() => setSidebarDisplay((prev) => !prev)}
        />{" "}
        SlipStream
      </div>
      <div className="nav-searchbar">
        <FontAwesomeIcon icon={faSearch} className="nav-icon" />
        <input className="search-input" type="text" placeholder="Search" />
      </div>

      <div className="nav-action">
        <div className="nav-theme">
          <FontAwesomeIcon icon={faMoon} className="nav-icon" />
          <span className="nav-action-title">Theme</span>
        </div>
        <div className="nav-user">
          <FontAwesomeIcon icon={faUser} className="nav-icon" />{" "}
          <span className="nav-action-title">User</span>
        </div>
      </div>
    </nav>
  );
}

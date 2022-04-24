import { faMoon, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./listing-page.css";

export default function ListingPage() {
  return (
    <div className="page-container">
      <nav className="navbar">
        <div className="nav-title">SlipStream</div>
        <div className="nav-searchbar">Searchbar</div>
        <div className="nav-action">
          <div className="nav-theme">
            <FontAwesomeIcon icon={faMoon} /> Theme{" "}
          </div>
          <div className="nav-user">
            <FontAwesomeIcon icon={faUser} /> User
          </div>
        </div>
      </nav>
      <main className="main-container">
        <div className="sidebar-container"></div>
        <div className="listing-container"></div>
      </main>
    </div>
  );
}

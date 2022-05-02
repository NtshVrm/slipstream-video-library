import {
  faClock,
  faMoon,
  faPlayCircle,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faHistory,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./listing-page.css";
import { videos } from "../../backend/db/videos";
import { VideoCard } from "../../components";

export default function ListingPage() {
  const sidebar = [
    { name: "Home", icon: faHome },
    { name: "Playlists", icon: faPlayCircle },
    { name: "Watch Later", icon: faClock },
    { name: "Liked Videos", icon: faThumbsUp },
    { name: "Watch History", icon: faHistory },
  ];

  const filters = [
    { id: 0, name: "All", active: true },
    { id: 1, name: "Race Highlights", active: false },
    { id: 2, name: "Qualifying Highlights", active: false },
    { id: 3, name: "Tech Talk", active: false },
    { id: 4, name: "Podcasts", active: false },
    { id: 5, name: "Others", active: false },
  ];

  const [sidebarDisplay, setSidebarDisplay] = useState(true);

  return (
    <div className="page-container">
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
          <div className="filter-container">
            {filters.map((item) => {
              return (
                <div className={`filter-item ${item.active ? "active" : ""}`}>
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className="video-listing">
            {videos.map((item) => {
              return <VideoCard video={item} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

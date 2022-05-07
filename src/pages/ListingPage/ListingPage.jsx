import {
  faClock,
  faPlayCircle,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { faHistory, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./listing-page.css";
import { videos } from "../../backend/db/videos";
import { NavBar, VideoCard } from "../../components";
import { useContext } from "react";
import { ComponentContext } from "../../context/component-context";

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

  const { sidebarDisplay } = useContext(ComponentContext);

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./listing-page.css";
import { NavBar, VideoCard } from "../../components";
import { useContext } from "react";
import { ComponentContext } from "../../context/component-context";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ListingPage() {
  const { sidebarDisplay, sidebar, filters } = useContext(ComponentContext);
  const [videos, setVideos] = useState({});

  const videoFetch = async () => {
    try {
      const response = await axios.get(`/api/videos`);
      setVideos(response.data.videos);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    videoFetch();
  }, []);
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
            {videos &&
              Object.values(videos).map((item) => {
                return <VideoCard video={item} />;
              })}
          </div>
        </div>
      </main>
    </div>
  );
}

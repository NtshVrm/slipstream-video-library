import "./single-video.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavBar } from "../../components";
import { useContext } from "react";
import { ComponentContext } from "../../context/component-context";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faPlayCircle,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";

export default function SingleVideo() {
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
          <div className="video-container">
            <iframe
              className="video-iframe"
              width="1000"
              height="500"
              src="https://www.youtube.com/embed/u5x4m2m8ZE4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-information">
            <div className="title-video">
              Internet's Best Reactions to the 2021 Abu Dhabi Grand Prix
            </div>
            <div className="creator-video">
              <div className="profile">
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLQYFO1dP2tLqeUhBY5DSLF3Fjhsb2whv7jx1YbcCw=s48-c-k-c0x00ffffff-no-rj"
                  className="creator-profile"
                  alt="creator img"
                />
              </div>
              <div className="detail-creator">
                <div className="creator-name">WTF1</div>
                <div className="video-views">
                  <FontAwesomeIcon icon={faPlay} />
                  600K Views
                </div>
              </div>
              <div className="video-actions">
                <div className="action">
                  {" "}
                  <FontAwesomeIcon icon={faThumbsUp} />
                  Like
                </div>
                <div className="action">
                  {" "}
                  <FontAwesomeIcon icon={faPlayCircle} />
                  Add to Playlist
                </div>
                <div className="action">
                  {" "}
                  <FontAwesomeIcon icon={faClock} />
                  Watch Later
                </div>
              </div>
            </div>
            <div className="description-video">
              Matt takes a look at your best comments and reactions from the
              2021 Abu Dhabi Grand Prix at the Yas Marina Circuit.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

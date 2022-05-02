import { faClock, faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function VideoCard({ video }) {
  const [videoMenuDisplay, setVideoMenuDisplay] = useState(false);
  return (
    <div className="video-card">
      <div className="video-thumbnail">
        <img src={video.thumbnail} className="thumbnail" alt="thumbnail" />
        <div className="video-duration">{video.duration}</div>
      </div>
      <div className="video-content">
        <div className="content-header">
          <img
            src={video.profile}
            className="creator-profile"
            alt="creator img"
          />
          <div className="video-title">{video.title}</div>
          <div className="video-action">
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="action-icon"
              onClick={() => setVideoMenuDisplay((prev) => !prev)}
            />
            {videoMenuDisplay ? (
              <div className="video-menu">
                <div className="video-menu-item">
                  <FontAwesomeIcon icon={faClock} />
                  Watch Later
                </div>
                <div className="video-menu-item">
                  <FontAwesomeIcon icon={faPlayCircle} />
                  Add to Playlist
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="content-footer">
          <div className="creator-title">{video.creator}</div>
          <div>
            <FontAwesomeIcon icon={faPlay} /> {video.views} views
          </div>
        </div>
      </div>
    </div>
  );
}

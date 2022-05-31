import { faClock, faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function VideoCard({ video }) {
  const [videoMenuDisplay, setVideoMenuDisplay] = useState(false);
  const [loginState, setLoginState] = useState(null);
  const navigate = useNavigate();
  const encodedToken = localStorage.getItem("token");

  useEffect(() => {
    setLoginState(localStorage.getItem("login") ? true : false);
  });

  async function addToWatchLater(item) {
    try {
      const response = await axios.post(
        `/api/user/watchlater`,
        {
          video: item,
        },

        {
          headers: {
            authorization: JSON.stringify(encodedToken),
          },
        }
      );

      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="video-card">
      <div className="video-thumbnail">
        <img
          src={video.thumbnail}
          className="thumbnail"
          alt="thumbnail"
          onClick={() => navigate("/SingleVideo")}
        />
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
                <div
                  className="video-menu-item"
                  onClick={() => {
                    loginState ? addToWatchLater(video) : navigate("/Signin");
                  }}
                >
                  <FontAwesomeIcon icon={faClock} />
                  Watch Later
                </div>
                <div className="video-menu-item">
                  <FontAwesomeIcon icon={faPlayCircle} />
                  <div>Add to Playlist</div>
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

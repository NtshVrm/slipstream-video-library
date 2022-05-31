import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { NavBar, Sidebar, VideoCard } from "../../components";
import { ComponentContext } from "../../context/component-context";

export default function WatchLater() {
  const { filters } = useContext(ComponentContext);
  const [watchlater, setWatchLater] = useState({});
  const encodedToken = localStorage.getItem("token");

  const watchLaterFetch = async () => {
    try {
      const response = await axios.get(
        `/api/user/watchlater`,

        {
          headers: {
            authorization: JSON.stringify(encodedToken),
          },
        }
      );

      setWatchLater(response.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    watchLaterFetch();
  }, []);

  return (
    <div className="page-container">
      <NavBar />
      <main className="main-container">
        <Sidebar />

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
            {watchlater &&
              Object.values(watchlater).map((item) => {
                return <VideoCard video={item} />;
              })}
          </div>
        </div>
      </main>
    </div>
  );
}

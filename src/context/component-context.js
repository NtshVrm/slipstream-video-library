import {
  faClock,
  faPlayCircle,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { faHistory, faHome } from "@fortawesome/free-solid-svg-icons";
import { createContext } from "react";
import { useState } from "react";

const ComponentContext = createContext();

const ComponenentProvider = ({ children }) => {
  const [sidebarDisplay, setSidebarDisplay] = useState(true);
  const sidebar = [
    { name: "Home", icon: faHome, route: "/" },
    { name: "Playlists", icon: faPlayCircle, route: "/Playlist" },
    { name: "Watch Later", icon: faClock, route: "/Watchlater" },
    { name: "Liked Videos", icon: faThumbsUp, route: "/Liked" },
    { name: "Watch History", icon: faHistory, route: "/History" },
  ];

  const filters = [
    { id: 0, name: "All", active: true },
    { id: 1, name: "Race Highlights", active: false },
    { id: 2, name: "Qualifying Highlights", active: false },
    { id: 3, name: "Tech Talk", active: false },
    { id: 4, name: "Podcasts", active: false },
    { id: 5, name: "Others", active: false },
  ];
  return (
    <ComponentContext.Provider
      value={{ sidebar, filters, sidebarDisplay, setSidebarDisplay }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

export { ComponentContext, ComponenentProvider };

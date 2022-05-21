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
  return (
    <ComponentContext.Provider
      value={{ sidebar, filters, sidebarDisplay, setSidebarDisplay }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

export { ComponentContext, ComponenentProvider };

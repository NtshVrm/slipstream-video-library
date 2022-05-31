import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { ComponentContext } from "../../context/component-context";

export default function Sidebar() {
  const { sidebarDisplay, sidebar } = useContext(ComponentContext);
  const navigate = useNavigate();
  return (
    <div
      className={`sidebar-container ${sidebarDisplay ? "sidebar-mobile" : ""}`}
    >
      {sidebar.map((item) => {
        return (
          <div
            className="sidebar-item"
            onClick={() => {
              navigate(`${item.route}`);
            }}
          >
            <FontAwesomeIcon className="sidebar-icon" icon={item.icon} />
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

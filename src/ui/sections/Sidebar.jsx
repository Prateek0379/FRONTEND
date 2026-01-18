import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

import dashboardIcon from "../assets/icons/dashboard.svg";
import analyticsIcon from "../assets/icons/analytics.svg";
import projectsIcon from "../assets/icons/projects.svg";
import settingsIcon from "../assets/icons/settings.svg";

const Sidebar = () => {
  return (
    <aside className="ui-sidebar">
      {/* Logo */}
      <div className="ui-sidebar__logo">MyApp</div>

      {/* Navigation */}
      <nav className="ui-sidebar__nav">
        <ul>
          <li>
            <NavLink to="/app" end>
              <img src={dashboardIcon} alt="" />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/app/analytics">
              <img src={analyticsIcon} alt="" />
              Analytics
            </NavLink>
          </li>

          <li>
            <NavLink to="/app/projects">
              <img src={projectsIcon} alt="" />
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/app/settings">
              <img src={settingsIcon} alt="" />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="ui-sidebar__footer">
        <div className="ui-sidebar__user">
          <div className="avatar" />
          <span>John Doe</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

import "../styles/sidebar.css";

import dashboardIcon from "../assets/icons/dashboard.svg";
import analyticsIcon from "../assets/icons/analytics.svg";
import projectsIcon from "../assets/icons/projects.svg";
import settingsIcon from "../assets/icons/settings.svg";

const Sidebar = () => {
  return (
    <aside className="ui-sidebar">
      <div className="ui-sidebar__logo">MyApp</div>

      <nav className="ui-sidebar__nav">
        <ul>
          <li className="active">
            <img src={dashboardIcon} alt="" />
            Dashboard
          </li>
          <li>
            <img src={analyticsIcon} alt="" />
            Analytics
          </li>
          <li>
            <img src={projectsIcon} alt="" />
            Projects
          </li>
          <li>
            <img src={settingsIcon} alt="" />
            Settings
          </li>
        </ul>
      </nav>

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

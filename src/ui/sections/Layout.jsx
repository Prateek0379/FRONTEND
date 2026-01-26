import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

import "../styles/layout.css";

function Layout() {
  return (
    <div className="ui-layout">
      <Sidebar />
      <main className="ui-layout__content">
        <div className="ui-layout__inner">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;

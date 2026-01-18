import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "../styles/layout.css";   // 🔴 THIS LINE IS REQUIRED

function Layout() {
  return (
    <div className="ui-layout">
      <Sidebar />
      <main className="ui-layout__content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

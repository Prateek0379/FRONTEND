import Sidebar from "./Sidebar";
import "../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="ui-layout">
      <Sidebar />

      <main className="ui-layout__content">
        {children || (
          <div className="ui-placeholder">
            Main content goes here
          </div>
        )}
      </main>
    </div>
  );
};

export default Layout;

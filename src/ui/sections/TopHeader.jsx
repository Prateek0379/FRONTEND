import "../styles/topHeader.css";

const TopHeader = ({
  title = "Dashboard",
  subtitle = "Overview and key metrics",
}) => {
  return (
    <header className="ui-top-header">
      <div className="ui-top-header__left">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="ui-top-header__right">
        <button className="ui-btn secondary">Export</button>
        <button className="ui-btn primary">Add New</button>
      </div>
    </header>
  );
};

export default TopHeader;

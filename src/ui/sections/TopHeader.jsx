import { useNavigate } from "react-router-dom";

function TopHeader({ title, subtitle }) {
  const navigate = useNavigate();

  function handleExport() {
    // Simple CSV export placeholder
    const csvContent =
      "data:text/csv;charset=utf-8,Metric,Value\nStudents,1248\nPlaced,842";
    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "dashboard_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function handleAddNew() {
    navigate("/app/projects");
  }

  return (
    <div className="ui-top-header">
      <div className="ui-top-header__left">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="ui-top-header__right">
        <button className="ui-btn secondary" onClick={handleExport}>
          Export
        </button>
        <button className="ui-btn primary" onClick={handleAddNew}>
          Add New
        </button>
      </div>
    </div>
  );
}

export default TopHeader;

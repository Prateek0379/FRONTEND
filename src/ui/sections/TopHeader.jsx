import { useLocation, useNavigate } from "react-router-dom";

function TopHeader({ title, subtitle }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleExport() {
    const csv =
      "Metric,Value\nTotal Students,1248\nPlaced Students,842\nAverage CTC,8.2";

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "placement_insights.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  function handleAddNew() {
    if (location.pathname.includes("/projects")) {
      alert("Use the Add Project button below 👇");
    } else {
      navigate("/app/projects");
    }
  }

  return (
    <div className="ui-top-header">
      <div className="ui-top-header__left">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="ui-top-header__right">
        <button
          className="ui-btn secondary"
          onClick={handleExport}
        >
          Export
        </button>

        <button
          className="ui-btn primary"
          onClick={handleAddNew}
        >
          Add New
        </button>
      </div>
    </div>
  );
}

export default TopHeader;

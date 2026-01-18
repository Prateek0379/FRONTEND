import TopHeader from "./TopHeader";
import DashboardCards from "./DashboardCards";
import DashboardCharts from "./DashboardCharts";

import "../styles/dashboard.css";
import "../styles/animations.css";

function DashboardUI() {
  return (
    <div className="ui-dashboard">
      
      {/* Header */}
      <div className="animate-fade-up">
        <TopHeader
          title="Placement Insights Dashboard"
          subtitle="Overview of performance metrics and insights"
        />
      </div>

      {/* KPI Cards */}
      <div className="animate-fade-up delay-1">
        <DashboardCards />
      </div>

      {/* Charts */}
      <div className="animate-fade-up delay-2">
        <DashboardCharts />
      </div>

    </div>
  );
}

export default DashboardUI;

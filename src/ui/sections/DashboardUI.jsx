import TopHeader from "./TopHeader";
import DashboardCards from "./DashboardCards";
import DashboardCharts from "./DashboardCharts";

import emptyIcon from "../assets/icons/empty-state.svg";

import "../styles/dashboard.css";
import "../styles/animations.css";

const DashboardUI = () => {
  return (
    <div className="ui-dashboard">
      <div className="animate-fade-up">
        <TopHeader
          title="Placement Insights Dashboard"
          subtitle="Metrics shown are based on historical placement data (simulated)."
        />
      </div>

      <div className="animate-fade-up delay-1">
        <DashboardCards />
      </div>

      <div className="animate-fade-up delay-2">
        <DashboardCharts />
      </div>

      <div className="ui-empty-state animate-fade-up delay-3">
        <img src={emptyIcon} alt="" />
        <h3>No analytics data yet</h3>
        <p>
          Once data is available, insights and trends will appear here.
        </p>
      </div>
    </div>
  );
};

export default DashboardUI;

import TopHeader from "./TopHeader";

import "../styles/analytics.css";
import "../styles/animations.css";

function AnalyticsUI() {
  return (
    <div className="ui-analytics">

      {/* Header */}
      <div className="animate-fade-up">
        <TopHeader
          title="Analytics"
          subtitle="Detailed insights into placement performance trends"
        />
      </div>

      {/* Charts */}
      <div className="ui-analytics__charts animate-fade-up delay-1">

        <div className="ui-analytics__card">
          <h3>CGPA vs Selection Rate</h3>
          <div className="ui-chart-placeholder">
            Chart will appear here
          </div>
        </div>

        <div className="ui-analytics__card">
          <h3>Skills Impact</h3>
          <div className="ui-chart-placeholder">
            Chart will appear here
          </div>
        </div>

        <div className="ui-analytics__card">
          <h3>Year-wise Placement Trend</h3>
          <div className="ui-chart-placeholder">
            Chart will appear here
          </div>
        </div>

      </div>
    </div>
  );
}

export default AnalyticsUI;

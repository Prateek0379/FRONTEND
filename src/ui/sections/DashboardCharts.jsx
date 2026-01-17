import Card from "../components/Card";
import "../styles/dashboardCharts.css";

const DashboardCharts = () => {
  return (
    <section className="ui-charts">
      <Card className="ui-chart-card">
        <h3>CGPA vs Selection Rate</h3>
        <p>Historical selection probability by CGPA range</p>

        <div className="ui-chart-placeholder">
          Chart will appear here
        </div>
      </Card>

      <Card className="ui-chart-card">
        <h3>Skills Impact Analysis</h3>
        <p>Historical selection probability by skill</p>

        <div className="ui-chart-placeholder">
          Chart will appear here
        </div>
      </Card>
    </section>
  );
};

export default DashboardCharts;

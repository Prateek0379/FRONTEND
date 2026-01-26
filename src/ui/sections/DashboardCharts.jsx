import { useEffect, useState } from "react";
import api from "../../services/api";

import "../styles/dashboardCharts.css";

const DashboardCharts = () => {
  const [cgpaData, setCgpaData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCharts() {
      try {
        const [cgpaRes, skillsRes] = await Promise.all([
          api.get("/analytics/cgpa-vs-selection"),
          api.get("/analytics/skills-impact"),
        ]);

        setCgpaData(cgpaRes.data?.data || []);
        setSkillsData(skillsRes.data?.data || []);
      } catch (err) {
        console.error("Failed to fetch charts", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCharts();
  }, []);

  if (loading) return <p>Loading analytics…</p>;

  if (error) {
    return (
      <p style={{ color: "#ef4444" }}>
        Unable to load analytics charts.
      </p>
    );
  }

  return (
    <section className="ui-charts">
      {/* CGPA Chart */}
      <div className="ui-chart-card">
        <h3>CGPA vs Selection Rate</h3>

        {cgpaData.length === 0 ? (
          <p>No data available</p>
        ) : (
          <ul className="chart-list">
            {cgpaData.map((item) => (
              <li key={item.cgpaBucket}>
                <span>{item.cgpaBucket}</span>
                <span>{item.selectionRate}%</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Skills Chart */}
      <div className="ui-chart-card">
        <h3>Skills Impact</h3>

        {skillsData.length === 0 ? (
          <p>No data available</p>
        ) : (
          <ul className="chart-list">
            {skillsData.map((item) => (
              <li key={item.skill}>
                <span>{item.skill}</span>
                <span>{item.selectionRate}%</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default DashboardCharts;

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import api from "../../services/api";
import "../styles/dashboardCharts.css";

const DashboardCharts = () => {
  const [cgpaData, setCgpaData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCharts() {
      try {
        const cgpaRes = await api.get("/analytics/cgpa-vs-selection");
        const skillsRes = await api.get("/analytics/skills-impact");

        setCgpaData(cgpaRes.data.data);
        setSkillsData(skillsRes.data.data);
      } catch (err) {
        console.error("Failed to load charts", err);
        setError(true);
      }
    }

    fetchCharts();
  }, []);

  if (error) {
    return (
      <p style={{ color: "#ef4444" }}>
        Unable to load analytics charts.
      </p>
    );
  }

  return (
    <div className="ui-charts-grid">
      {/* CGPA Chart */}
      <div className="ui-chart-card">
        <h3>CGPA vs Selection Rate</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={cgpaData}>
            <XAxis dataKey="cgpaBucket" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="selectionRate" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Skills Chart */}
      <div className="ui-chart-card">
        <h3>Skills Impact</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={skillsData}>
            <XAxis dataKey="skill" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="selectionRate" fill="#22c55e" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;

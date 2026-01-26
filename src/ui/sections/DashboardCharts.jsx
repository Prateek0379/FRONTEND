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

        setCgpaData(cgpaRes.data.data || []);
        setSkillsData(skillsRes.data.data || []);
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
      {/* ================= CGPA IMPACT ================= */}
      <div className="ui-chart-card">
        <h3>
          CGPA Impact
          <span style={{ fontSize: 12, color: "#94a3b8" }}>
            {" "}– Historical Selection Probability (Simulated)
          </span>
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={cgpaData}>
            <XAxis dataKey="cgpaBucket" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="selectionRate"
              fill="#3b82f6"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>

        <p style={{ marginTop: 12, fontSize: 13, color: "#94a3b8" }}>
          Higher CGPA buckets historically show higher selection probability.
        </p>

        <p style={{ fontSize: 12, color: "#64748b" }}>
          This reflects historical trends in simulated data, not individual
          prediction.
        </p>
      </div>

      {/* ================= SKILL IMPACT ================= */}
      <div className="ui-chart-card">
        <h3>
          Skill Impact
          <span style={{ fontSize: 12, color: "#94a3b8" }}>
            {" "}– Historical Association (Simulated)
          </span>
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={skillsData}>
            <XAxis dataKey="skill" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="selectionRate"
              fill="#22c55e"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>

        <p style={{ marginTop: 12, fontSize: 13, color: "#94a3b8" }}>
          Candidates with certain skills historically showed higher selection
          probability.
        </p>

        <p style={{ fontSize: 12, color: "#64748b" }}>
          Skill impact reflects historical association only. It does not imply
          skill priority, requirement, or hiring criteria.
        </p>
      </div>
    </div>
  );
};

export default DashboardCharts;

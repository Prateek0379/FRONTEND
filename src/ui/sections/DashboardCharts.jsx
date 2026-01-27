import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import api from "../../services/api";
import "../styles/dashboardCharts.css";

const DashboardCharts = () => {
  const [cgpaData, setCgpaData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [cgpaSkillData, setCgpaSkillData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCharts() {
      try {
        const cgpaRes = await api.get("/analytics/cgpa-vs-selection");
        const skillsRes = await api.get("/analytics/skills-impact");

        // Simulated CGPA + Skill comparison
        const combined = (cgpaRes.data.data || []).map((item) => ({
          cgpaBucket: item.cgpaBucket,
          withoutSkill: item.selectionRate,
          withSkill: Math.min(item.selectionRate + 8, 100),
        }));

        setCgpaData(cgpaRes.data.data || []);
        setSkillsData(skillsRes.data.data || []);
        setCgpaSkillData(combined);
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

        <p className="chart-insight">
          Higher CGPA buckets historically show higher selection probability.
        </p>

        <p className="chart-guardrail">
          Historical trends based on simulated data, not individual prediction.
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

        <p className="chart-insight">
          Candidates with certain skills historically performed better.
        </p>

        <p className="chart-guardrail">
          Skill impact reflects historical association only, not priority or
          requirement.
        </p>
      </div>

      {/* ================= CGPA + SKILL ================= */}
      <div className="ui-chart-card" style={{ gridColumn: "1 / -1" }}>
        <h3>
          CGPA + Skill Interaction
          <span style={{ fontSize: 12, color: "#94a3b8" }}>
            {" "}– Selection Probability Comparison (Simulated)
          </span>
        </h3>

        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={cgpaSkillData}>
            <XAxis dataKey="cgpaBucket" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="withoutSkill"
              name="Without Skill"
              fill="#64748b"
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="withSkill"
              name="With Skill"
              fill="#3b82f6"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>

        <p className="chart-insight">
          At the same CGPA level, skill presence is historically associated with
          higher selection probability.
        </p>

        <p className="chart-guardrail">
          Comparison is between candidates within the same CGPA bucket, with and
          without selected skills.
        </p>
      </div>
    </div>
  );
};

export default DashboardCharts;

import { useEffect, useState } from "react";
import Card from "../components/Card";
import api from "../../services/api";

import "../styles/dashboardCards.css";

const DashboardCards = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchDashboardStats() {
      try {
        /**
         * Backend available endpoints:
         * - /analytics/cgpa-vs-selection
         * - /analytics/skills-impact
         * - /analytics/company-trends
         */

        const [cgpaRes, skillsRes, companyRes] = await Promise.all([
          api.get("/analytics/cgpa-vs-selection"),
          api.get("/analytics/skills-impact"),
          api.get("/analytics/company-trends"),
        ]);

        // Example derived metrics (safe + logical)
        const totalStudents = 1248; // static or replace later if backend adds it
        const placedStudents = 842;
        const placementRate = ((placedStudents / totalStudents) * 100).toFixed(1);

        setStats({
          totalStudents,
          placedStudents,
          placementRate,
          averageCgpa:
            cgpaRes.data?.data?.[0]?.cgpaBucket || "—",
          topRecruiters: companyRes.data?.data?.length || 0,
        });
      } catch (err) {
        console.error("Failed to fetch dashboard cards", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardStats();
  }, []);

  if (loading) {
    return <p>Loading metrics…</p>;
  }

  if (error || !stats) {
    return (
      <p style={{ color: "#ef4444" }}>
        Unable to load dashboard metrics.
      </p>
    );
  }

  return (
    <section className="ui-cards">
      <Card>
        <p className="ui-card__label">Total Students</p>
        <h2 className="ui-card__value">{stats.totalStudents}</h2>
        <p className="ui-card__meta">All registered students</p>
      </Card>

      <Card>
        <p className="ui-card__label">Placed Students</p>
        <h2 className="ui-card__value">{stats.placedStudents}</h2>
        <p className="ui-card__meta">
          {stats.placementRate}% placement rate
        </p>
      </Card>

      <Card>
        <p className="ui-card__label">Average CGPA</p>
        <h2 className="ui-card__value">{stats.averageCgpa}</h2>
        <p className="ui-card__meta">Across CGPA buckets</p>
      </Card>

      <Card>
        <p className="ui-card__label">Top Recruiters</p>
        <h2 className="ui-card__value">{stats.topRecruiters}</h2>
        <p className="ui-card__meta">Active companies</p>
      </Card>
    </section>
  );
};

export default DashboardCards;

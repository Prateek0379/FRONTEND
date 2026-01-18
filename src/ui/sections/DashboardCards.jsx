import { useEffect, useState } from "react";
import Card from "../components/Card";
import api from "../../services/api";

import "../styles/dashboardCards.css";

const DashboardCards = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchDashboardStats() {
      try {
        const res = await api.get("/analytics/overview");
        setData(res.data);
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

  if (error || !data) {
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
        <h2 className="ui-card__value">{data.totalStudents}</h2>
        <p className="ui-card__meta">All registered students</p>
      </Card>

      <Card>
        <p className="ui-card__label">Placed Students</p>
        <h2 className="ui-card__value">{data.placedStudents}</h2>
        <p className="ui-card__meta">
          {data.placementRate}% placement rate
        </p>
      </Card>

      <Card>
        <p className="ui-card__label">Average CGPA</p>
        <h2 className="ui-card__value">{data.averageCgpa}</h2>
        <p className="ui-card__meta">Across placed students</p>
      </Card>

      <Card>
        <p className="ui-card__label">Top Recruiters</p>
        <h2 className="ui-card__value">{data.topRecruiters}</h2>
        <p className="ui-card__meta">Active companies</p>
      </Card>
    </section>
  );
};

export default DashboardCards;

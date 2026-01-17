import Card from "../components/Card";
import "../styles/dashboardCards.css";

const cards = [
  {
    label: "Total Students",
    value: "1,248",
    meta: "+12% from last year",
  },
  {
    label: "Placed Students",
    value: "842",
    meta: "67.4% placement rate",
  },
  {
    label: "Average CTC",
    value: "₹8.2 LPA",
    meta: "Across all offers",
  },
  {
    label: "Top Recruiters",
    value: "56",
    meta: "Active companies",
  },
];

const DashboardCards = () => {
  return (
    <section className="ui-cards">
      {cards.map((card, idx) => (
        <Card key={idx}>
          <p className="ui-card__label">{card.label}</p>
          <h2 className="ui-card__value">{card.value}</h2>
          <p className="ui-card__meta">{card.meta}</p>
        </Card>
      ))}
    </section>
  );
};

export default DashboardCards;

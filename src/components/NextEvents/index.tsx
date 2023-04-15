import Filter from "../Filter";
import "./styles.css";

export default function NextEvents() {
  return (
    <div className="mr-next-event mr-container">
      <h2>Próximos Eventos</h2>
      <div className="mr-filters-container">
        <Filter />
        <Filter />
        <Filter />
      </div>
    </div>
  );
}

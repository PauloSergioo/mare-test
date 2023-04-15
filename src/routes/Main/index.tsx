import "./styles.css";
import Header from "../../components/Header";
import HomeCard from "../../components/HomeCard";
import NextEvents from "../../components/NextEvents";
import ShowCatalog from "../../components/ShowCatalog";
import LoadMore from "../../components/LoadMore";

export default function Main() {
  return (
    <main>
      <section id="mr-section-home">
        <header>
          <Header />
        </header>
        <div className="mr-homecard">
          <HomeCard />
        </div>
      </section>
      <section id="mr-section-catalog">
        <NextEvents />
        <div className="mr-catalog-cards mr-container">
          <ShowCatalog />
          <ShowCatalog />
          <ShowCatalog />
          <ShowCatalog />
          <ShowCatalog />
          <ShowCatalog />
        </div>
        <div className="mr-load-more">
          <LoadMore />
        </div>
      </section>
      <section>

      </section>
    </main>
  );
}

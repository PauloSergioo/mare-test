import "./styles.css";
import showImg from "../../assets/show.jpg";

export default function ShowCatalog() {
  return (
    <div className="mr-card-container mr-container">
      <div className="mr-card-show">
        <img src={showImg} alt="show" />
        <div className="mr-card-titles">
          <div className="mr-date">
            <h5> <span className="mr-month">MAR</span> <span className="mr-day">11</span> </h5>
          </div>
          <div>
            <h6>Ilhabela - Festival Sertanejo</h6>
            <p>Venha provar do melhor sertanejo dos anos 90</p>
          </div>
        </div>
      </div>
    </div>
  );
}

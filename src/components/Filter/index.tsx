import "./styles.css";
import setaImg from "../../assets/seta.png";

export default function Filter() {
  return (
      <div className="mr-filter">
        <div>Categoria</div>
        <img src={setaImg} alt="seta" />
      </div>
  );
}

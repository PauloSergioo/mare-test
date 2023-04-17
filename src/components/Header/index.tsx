import "./styles.css";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="mr-header mr-container">
      <div className="mr-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="mr-nav">
        <a href="">Inicio</a>
        <a href=".mr-section-catalog">Eventos</a>
        <a href="">Sobre Nós</a>
        <a href="">Contato</a>
        <div className="mr-button-login">Login</div>
      </div>
    </div>
  );
}

import "./styles.css";
import logoImg from "../../assets/logo.png";
import facebookImg from "../../assets/facebook.png";
import instagramImg from "../../assets/instagram.png";
import telegramImg from "../../assets/telegrama.png";
import tiktokImg from "../../assets/tiktok.png";
import twitterImg from "../../assets/twitter.png";
import whatsappImg from "../../assets/whatsapp.png";

export default function Footer() {
  return (
    <div className="mr-container">
      <div className="mr-footer">
        <div>
          <div className="mr-logo">
            <img src={logoImg} alt="logo" />
          </div>
          <div className="mr-social-media">
            <img src={facebookImg} alt="facebook" />
            <img src={instagramImg} alt="instagram" />
            <img src={telegramImg} alt="telegram" />
            <img src={tiktokImg} alt="tiktok" />
            <img src={twitterImg} alt="twitter" />
            <img src={whatsappImg} alt="whatsapp" />
          </div>
        </div>
        <div className="mr-copyright">
          <p>Copyright © 2022 | All Rights Reserved.</p>
        </div>
        <div className="mr-contact">
          <h6>Contato</h6>
          <address>marecontato@gmail.com</address>
          <address>São Paulo - SP</address>
          <p>3896-1111</p>
        </div>
      </div>
    </div>
  );
}

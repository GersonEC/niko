import Social from "../../assets/images/social.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_info">
        <div>
          <p className="footer_title">CERCARE NEGOZIO</p>
          <p className="footer_title">REGISTRATI ALLA NEWSLETTER</p>
          <p className="footer_title">MEMBERSHIP</p>
          <p className="footer_title">INVIACI UN TUO FEEDBACK</p>
        </div>
        <div>
          <p className="footer_title">RICEVERE AIUTO</p>
          <p className="footer_subtitle">Stato dell'ordine</p>
          <p className="footer_subtitle">Invio e ricezione</p>
          <p className="footer_subtitle">Restituzioni</p>
          <p className="footer_subtitle">Opzioni di pagamento</p>
          <p className="footer_subtitle">Contattaci</p>
        </div>
        <div>
          <p className="footer_title">RIGUARDO A NIKE</p>
          <p className="footer_subtitle">Notizie</p>
          <p className="footer_subtitle">Lavora con noi</p>
          <p className="footer_subtitle">Investitori</p>
          <p className="footer_subtitle">Sostenibilità</p>
        </div>
      </div>

      <div className="social">
        <img src={Social} alt="social" />
      </div>
    </div>
  );
}

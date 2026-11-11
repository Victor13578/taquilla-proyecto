import "./Footer.css";
import { translations } from "../data/translations";

function Footer({ idioma }) {
  const t = translations[idioma].footer;

  return (
    <footer className="footer">
      <div className="footer__main">

        <div className="footer__brand">
          <a href="/" className="footer__logo">
            <span className="footer__logo-icon">T</span>
            <span>taquilla</span>
          </a>

          <p>{t.description}</p>
        </div>

        <nav className="footer__column" aria-label={t.explore}>
          <h3>{t.explore}</h3>
          <a href="#inicio">{t.home}</a>
          <a href="#explorar">{t.exploreEvents}</a>
        </nav>

        <nav className="footer__column" aria-label={t.account}>
          <h3>{t.account}</h3>
          <a href="#iniciar-sesion">{t.login}</a>
          <a href="#crear-cuenta">{t.register}</a>
        </nav>

        <nav className="footer__column" aria-label={t.legal}>
          <h3>{t.legal}</h3>
          <a href="#terminos">{t.terms}</a>
          <a href="#privacidad">{t.privacy}</a>
          <a href="#accesibilidad">{t.accessibility}</a>
        </nav>

      </div>

      <div className="footer__bottom">
        <span>{t.copyright}</span>
        <span>{t.disclaimer}</span>
      </div>
    </footer>
  );
}

export default Footer;

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">

        <div className="footer__brand">
          <a href="/" className="footer__logo">
            <span className="footer__logo-icon">T</span>
            <span>taquilla</span>
          </a>

          <p>
            Conciertos, teatro, deportes y festivales en un
            solo lugar. Explora eventos y consulta sus detalles.
          </p>
        </div>

        <nav className="footer__column" aria-label="Explora">
          <h3>Explora</h3>
          <a href="#inicio">Inicio</a>
          <a href="#explorar">Explorar eventos</a>
        </nav>

        <nav className="footer__column" aria-label="Tu cuenta">
          <h3>Tu cuenta</h3>
          <a href="#iniciar-sesion">Iniciar sesión</a>
          <a href="#crear-cuenta">Crear cuenta</a>
        </nav>

        <nav className="footer__column" aria-label="Información legal">
          <h3>Legal</h3>
          <a href="#terminos">Términos de uso</a>
          <a href="#privacidad">Política de privacidad</a>
          <a href="#accesibilidad">Accesibilidad</a>
        </nav>

      </div>

      <div className="footer__bottom">
        <span>© 2026 Taquilla. Proyecto académico.</span>
        <span>Datos de ejemplo con fines académicos.</span>
      </div>
    </footer>
  );
}

export default Footer;
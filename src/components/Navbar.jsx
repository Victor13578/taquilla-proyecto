import { translations } from "../data/translations";
import AccessibilityPanel from "./AccessibilityPanel";
import { useState } from "react";
import "./Navbar.css";

const enlaces = [
  { key: "home", href: "#inicio" },
  { key: "explore", href: "#explorar" },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="5" r="2" />
      <path d="M4 9h16M12 9v4m0 0-4 8m4-8 4 8" />
    </svg>
  );
}

function Navbar({
  preferences,
  onPreferenceChange,
  idioma,
  setIdioma,
}) {  
    const t = translations[idioma];
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [accesibilidadAbierta, setAccesibilidadAbierta] = useState(false);
    const [busquedaMovilAbierta, setBusquedaMovilAbierta] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <a className="navbar__logo" href="#inicio" aria-label="Taquilla, inicio">
        <span className="navbar__logo-icon" aria-hidden="true">
          T
        </span>
        <span>taquilla</span>
      </a>

      {/* Navegación principal */}
      <nav
        className={`navbar__nav ${
          menuAbierto ? "navbar__nav--abierto" : ""
        }`}
        aria-label="Navegación principal"
      >
        {enlaces.map((enlace) => (
        <a
            key={enlace.key}
            href={enlace.href}
            onClick={() => setMenuAbierto(false)}
        >
            {t.navbar[enlace.key]}
        </a>
        ))}
      </nav>

      {/* Acciones de escritorio */}
      <div className="navbar__acciones">
        <label className="navbar__busqueda">
          <SearchIcon />
          <span className="sr-only">Buscar eventos y artistas</span>
          <input
            type="search"
            placeholder={t.navbar.search}
            />
        </label>

        {/* Accesibilidad */}
        <div className="navbar__accessibility-wrap">
          <button
            className="navbar__accessibility"
            type="button"
            aria-label="Opciones de accesibilidad"
            aria-expanded={accesibilidadAbierta}
            onClick={() =>
              setAccesibilidadAbierta(!accesibilidadAbierta)
            }
          >
            <AccessibilityIcon />
          </button>

          {accesibilidadAbierta && (
            <AccessibilityPanel
                onClose={() => setAccesibilidadAbierta(false)}
                preferences={preferences}
                onPreferenceChange={onPreferenceChange}
            />
        )}
        </div>

        {/* Selector de idioma */}
        <div className="navbar__language">
          <button
            type="button"
            className={idioma === "ES" ? "is-active" : ""}
            aria-pressed={idioma === "ES"}
            onClick={() => setIdioma("ES")}
          >
            ES
          </button>

          <button
            type="button"
            className={idioma === "EN" ? "is-active" : ""}
            aria-pressed={idioma === "EN"}
            onClick={() => setIdioma("EN")}
          >
            EN
          </button>
        </div>

        <a className="navbar__login" href="#iniciar-sesion">
            {t.navbar.login}
        </a>

        <a className="navbar__register" href="#crear-cuenta">
            {t.navbar.register}
        </a>
      </div>

      {/* Acciones móviles */}
      <div className="navbar__mobile-actions">
        <button
          className="navbar__mobile-search"
          type="button"
          aria-label="Abrir búsqueda"
          aria-expanded={busquedaMovilAbierta}
          onClick={() => {
            setBusquedaMovilAbierta(!busquedaMovilAbierta);
            setMenuAbierto(false);
        }}
        >
          <SearchIcon />
        </button>

        <button
          className="navbar__menu"
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          onClick={() => {
            setMenuAbierto(!menuAbierto);
            setBusquedaMovilAbierta(false);
        }}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>
      </div>

      {/* Búsqueda móvil */}
      {busquedaMovilAbierta && (
        <form
          className="navbar__mobile-search-panel"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="search"
            placeholder={t.navbar.search}
            aria-label="Buscar eventos y artistas"
            autoFocus
          />
        </form>
      )}
    </header>
  );
}

export default Navbar;

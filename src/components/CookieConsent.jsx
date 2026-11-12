
import { useState } from "react";
import "./CookieConsent.css";

const STORAGE_KEY = "taquilla-cookie-consent";

const preferenciasIniciales = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function CookieConsent({
  idioma = "ES",
  openSettings = false,
  onCloseSettings,
}) {
  const es = idioma === "ES";

  // Recuperar consentimiento guardado
  const [consentimiento, setConsentimiento] = useState(() => {
    try {
      const guardado = localStorage.getItem(STORAGE_KEY);
      return guardado ? JSON.parse(guardado) : null;
    } catch {
      return null;
    }
  });

  // Preferencias seleccionadas
  const [preferencias, setPreferencias] = useState(
    consentimiento || preferenciasIniciales
  );

  // Controlar apertura del panel
  const [mostrarConfiguracion, setMostrarConfiguracion] =
    useState(false);

  const configuracionVisible =
    mostrarConfiguracion || openSettings;

  // Cerrar configuración
  const cerrarConfiguracion = () => {
    setMostrarConfiguracion(false);
    onCloseSettings?.();
  };

  // Guardar consentimiento
  const guardarConsentimiento = (nuevasPreferencias) => {
    const datos = {
      ...nuevasPreferencias,
      necessary: true,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(datos)
    );

    setConsentimiento(datos);
    setPreferencias(datos);
    cerrarConfiguracion();
  };

  // Aceptar todas las cookies
  const aceptarTodas = () => {
    guardarConsentimiento({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  // Rechazar cookies opcionales
  const rechazarOpcionales = () => {
    guardarConsentimiento(preferenciasIniciales);
  };

  // Cambiar preferencias individuales
  const cambiarPreferencia = (nombre) => {
    setPreferencias((actuales) => ({
      ...actuales,
      [nombre]: !actuales[nombre],
    }));
  };

  // Guardar preferencias seleccionadas
  const guardarPreferencias = () => {
    guardarConsentimiento(preferencias);
  };

  return (
    <>
      {/* BANNER DE COOKIES */}
      {!consentimiento && !configuracionVisible && (
        <div className="cookie-banner">
          <div className="cookie-banner__content">
            <span className="cookie-banner__tag">
              {es
                ? "Tu privacidad importa"
                : "Your privacy matters"}
            </span>

            <h2>
              {es
                ? "Taquilla utiliza cookies"
                : "Taquilla uses cookies"}
            </h2>

            <p>
              {es
                ? "Utilizamos cookies necesarias para el funcionamiento del sitio y, con tu autorización, cookies opcionales para analizar el uso de la plataforma y mejorar tu experiencia."
                : "We use necessary cookies to make this site work and, with your permission, optional cookies to understand platform usage and improve your experience."}
            </p>
          </div>

          <div className="cookie-banner__actions">
            <button
              className="cookie-button cookie-button--outline"
              onClick={() => setMostrarConfiguracion(true)}
            >
              {es
                ? "Configurar preferencias"
                : "Cookie settings"}
            </button>

            <button
              className="cookie-button cookie-button--secondary"
              onClick={rechazarOpcionales}
            >
              {es
                ? "Rechazar opcionales"
                : "Reject optional"}
            </button>

            <button
              className="cookie-button cookie-button--primary"
              onClick={aceptarTodas}
            >
              {es ? "Aceptar todas" : "Accept all"}
            </button>
          </div>
        </div>
      )}

      {/* PANEL DE CONFIGURACIÓN */}
      {configuracionVisible && (
        <div
          className="cookie-overlay"
          onClick={cerrarConfiguracion}
        >
          <section
            className="cookie-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="cookie-modal__close"
              onClick={cerrarConfiguracion}
              aria-label={es ? "Cerrar" : "Close"}
            >
              ×
            </button>

            <span className="cookie-banner__tag">
              {es ? "Privacidad" : "Privacy"}
            </span>

            <h2 id="cookie-modal-title">
              {es
                ? "Preferencias de cookies"
                : "Cookie preferences"}
            </h2>

            <p>
              {es
                ? "Elige qué tipos de cookies opcionales permites. Puedes cambiar tu decisión cuando quieras."
                : "Choose which optional cookies you allow. You can change your decision at any time."}
            </p>

            {/* NECESARIAS */}
            <div className="cookie-option">
              <div>
                <strong>
                  {es
                    ? "Cookies necesarias"
                    : "Necessary cookies"}
                </strong>

                <p>
                  {es
                    ? "Permiten el funcionamiento básico de Taquilla."
                    : "Required for Taquilla's basic functionality."}
                </p>
              </div>

              <span className="cookie-option__always">
                {es ? "Siempre activas" : "Always active"}
              </span>
            </div>

            {/* ANALÍTICA */}
            <div className="cookie-option">
              <div>
                <strong>
                  {es
                    ? "Cookies de analítica"
                    : "Analytics cookies"}
                </strong>

                <p>
                  {es
                    ? "Nos ayudan a comprender cómo se utiliza la plataforma."
                    : "Help us understand how the platform is used."}
                </p>
              </div>

              <input
                type="checkbox"
                checked={preferencias.analytics}
                onChange={() =>
                  cambiarPreferencia("analytics")
                }
                aria-label={
                  es
                    ? "Permitir analítica"
                    : "Allow analytics"
                }
              />
            </div>

            {/* MARKETING */}
            <div className="cookie-option">
              <div>
                <strong>
                  {es
                    ? "Cookies de marketing"
                    : "Marketing cookies"}
                </strong>

                <p>
                  {es
                    ? "Permiten personalizar contenido promocional."
                    : "Allow personalized promotional content."}
                </p>
              </div>

              <input
                type="checkbox"
                checked={preferencias.marketing}
                onChange={() =>
                  cambiarPreferencia("marketing")
                }
                aria-label={
                  es
                    ? "Permitir marketing"
                    : "Allow marketing"
                }
              />
            </div>

            {/* BOTONES */}
            <div className="cookie-modal__actions">
              <button
                className="cookie-button cookie-button--secondary"
                onClick={rechazarOpcionales}
              >
                {es
                  ? "Rechazar opcionales"
                  : "Reject optional"}
              </button>

              <button
                className="cookie-button cookie-button--primary"
                onClick={guardarPreferencias}
              >
                {es
                  ? "Guardar preferencias"
                  : "Save preferences"}
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default CookieConsent;

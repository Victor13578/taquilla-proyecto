
import "./AccessibilityPanel.css";

function AccessibilityPanel({
    onClose,
    preferences,
    onPreferenceChange,
}) {
    const cambiarTamano = (size) => {
        onPreferenceChange("fontSize", size);
    };

    const cambiarOpcion = (option) => {
        onPreferenceChange(option, !preferences[option]);
    };

    return (
        <aside
            className="accessibility-panel"
            aria-label="Panel de accesibilidad"
        >
            <div className="accessibility-panel__header">
                <h2>Accesibilidad</h2>

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar panel"
                >
                    ✕
                </button>
            </div>

            {/* Tamaño del texto */}
            <section className="accessibility-panel__section">
                <h3>Tamaño del texto</h3>

                <div className="accessibility-panel__sizes">
                    {["small", "normal", "large"].map((size) => (
                        <button
                            key={size}
                            type="button"
                            className={
                                preferences.fontSize === size
                                    ? "is-active"
                                    : ""
                            }
                            aria-pressed={preferences.fontSize === size}
                            onClick={() => cambiarTamano(size)}
                        >
                            A
                        </button>
                    ))}
                </div>
            </section>

            {/* Preferencias visuales */}
            <section className="accessibility-panel__section">
                <h3>Preferencias visuales</h3>

                <label className="accessibility-panel__option">
                    <span>
                        <strong>Alto contraste</strong>
                        <small>Aumenta el contraste de los elementos</small>
                    </span>

                    <input
                        type="checkbox"
                        checked={preferences.highContrast}
                        onChange={() => cambiarOpcion("highContrast")}
                    />
                </label>

                <label className="accessibility-panel__option">
                    <span>
                        <strong>Reducir movimiento</strong>
                        <small>Reduce las animaciones de la interfaz</small>
                    </span>

                    <input
                        type="checkbox"
                        checked={preferences.reduceMotion}
                        onChange={() => cambiarOpcion("reduceMotion")}
                    />
                </label>

                <label className="accessibility-panel__option">
                    <span>
                        <strong>Subrayar enlaces</strong>
                        <small>Facilita la identificación de enlaces</small>
                    </span>

                    <input
                        type="checkbox"
                        checked={preferences.underlineLinks}
                        onChange={() => cambiarOpcion("underlineLinks")}
                    />
                </label>

                <label className="accessibility-panel__option">
                    <span>
                        <strong>Espaciado del texto</strong>
                        <small>Mejora la separación entre caracteres</small>
                    </span>

                    <input
                        type="checkbox"
                        checked={preferences.increaseSpacing}
                        onChange={() => cambiarOpcion("increaseSpacing")}
                    />
                </label>
            </section>

            <div className="accessibility-panel__footer">
                <button
                    type="button"
                    className="accessibility-panel__reset"
                    onClick={() => {
                        onPreferenceChange("reset", true);
                    }}
                >
                    Restablecer preferencias
                </button>
            </div>
        </aside>
    );
}

export default AccessibilityPanel;

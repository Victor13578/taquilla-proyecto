import { useState } from "react";
import "./Navbar.css";

const enlaces = [
    "Explorar",
    "Conciertos",
    "Teatro",
    "Deportes",
    "Festivales",
];

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [preferenciasAbiertas, setPreferenciasAbiertas] = useState(false);

    return (
        <header className="navbar">
            <a className="navbar__logo" href="/" aria-label="Taquilla, inicio">
                <span className="navbar__logo-icon" aria-hidden="true">
                    T
                </span>
                <span>taquilla</span>
            </a>

            <nav
                className={`navbar__nav ${menuAbierto ? "navbar__nav--abierto" : ""}`}
                aria-label="Navegación principal"
            >
                {enlaces.map((enlace) => (
                    <a
                        key={enlace}
                        href={`#${enlace.toLowerCase()}`}
                        onClick={() => setMenuAbierto(false)}
                    >
                        {enlace}
                    </a>
                ))}
            </nav>

            <div className="navbar__acciones">
                <label className="navbar__busqueda">
                    <span aria-hidden="true">⌕</span>
                    <span className="sr-only">Buscar eventos</span>
                    <input type="search" placeholder="Busca eventos y artistas" />
                </label>

                <div className="navbar__preferencias">

                    <button
                        className="navbar__idioma"
                        type="button"
                        aria-expanded={preferenciasAbiertas}
                        onClick={() =>
                            setPreferenciasAbiertas(!preferenciasAbiertas)
                        }
                    >
                        <span>ES</span>
                        <span className="navbar__moneda">COP</span>
                        <span aria-hidden="true">⌄</span>
                    </button>


                    {preferenciasAbiertas && (
                        <div className="navbar__preferencias-menu">
                            <label htmlFor="idioma">Idioma</label>
                            <select id="idioma" defaultValue="es">
                                <option value="es">Español</option>
                                <option value="en">English</option>
                            </select>

                            <label htmlFor="moneda">Moneda</label>
                            <select id="moneda" defaultValue="cop">
                                <option value="cop">COP - Peso colombiano</option>
                            </select>
                        </div>
                    )}
                </div>

                <a className="navbar__login" href="#iniciar-sesion">
                    Ingresar
                </a>
            </div>

            <button
                className="navbar__menu"
                type="button"
                aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuAbierto}
                onClick={() => setMenuAbierto(!menuAbierto)}
            >
                {menuAbierto ? "✕" : "☰"}
            </button>
        </header>
    );
}

export default Navbar;

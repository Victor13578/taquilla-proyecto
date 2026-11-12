import { useEffect, useState } from "react";
import "./App.css";

import { translations } from "./data/translations";

import { apiGet } from "./services/api";
import { adaptarEvento } from "./services/eventosAdapter";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryList from "./components/CategoryList";
import EventSection from "./components/EventSection";

const preferenciasIniciales = {
  fontSize: "normal",
  highContrast: false,
  reduceMotion: false,
  underlineLinks: false,
  increaseSpacing: false,
};

function App() {
  // Idioma seleccionado
  const [idioma, setIdioma] = useState(() => {
  const idiomaGuardado = localStorage.getItem("idioma");

    return idiomaGuardado === "EN" ? "EN" : "ES";
  });

  // Eventos destacados
  const [eventosDestacados, setEventosDestacados] = useState([]);
  const [cargandoEventos, setCargandoEventos] = useState(true);
  const [errorEventos, setErrorEventos] = useState("");

  // Preferencias de accesibilidad
  const [preferences, setPreferences] = useState(
    preferenciasIniciales
  );
  const [categorias, setCategorias] = useState([]);
  const [cargandoCategorias, setCargandoCategorias] = useState(true);
  const [eventosProximos, setEventosProximos] = useState([]);
  const [cargandoProximos, setCargandoProximos] = useState(true);
  const [errorProximos, setErrorProximos] = useState("");

  // Guardar idioma
  useEffect(() => {
    localStorage.setItem("idioma", idioma);
  }, [idioma]);

  // Cargar eventos desde la API
  useEffect(() => {
    async function cargarEventos() {
      try {
        setCargandoEventos(true);
        setErrorEventos("");

        const resultado = await apiGet("/eventos/destacados");

        const eventosAdaptados = resultado.datos.map(adaptarEvento);

        setEventosDestacados(eventosAdaptados);
      } catch (error) {
        console.error("Error al cargar eventos:", error);
        setErrorEventos("No fue posible cargar los eventos.");
      } finally {
        setCargandoEventos(false);
      }
    }

    cargarEventos();
  }, []);

  useEffect(() => {
  async function cargarCategorias() {
    try {
      setCargandoCategorias(true);

      const resultado = await apiGet("/categorias");

      setCategorias(resultado.datos);
    } catch (error) {
      console.error("Error al cargar categorías:", error);
    } finally {
      setCargandoCategorias(false);
    }
  }

  cargarCategorias();
  }, []);

  useEffect(() => {
  async function cargarEventosProximos() {
    try {
      setCargandoProximos(true);
      setErrorProximos("");

      const resultado = await apiGet(
        "/eventos?pagina=1&porPagina=4&orden=fecha"
      );

      const eventosAdaptados = resultado.datos.map(adaptarEvento);

      setEventosProximos(eventosAdaptados);
    } catch (error) {
      console.error("Error al cargar próximos eventos:", error);
      setErrorProximos("No fue posible cargar los próximos eventos.");
    } finally {
      setCargandoProximos(false);
    }
  }

  cargarEventosProximos();
  }, []);

  // Cambiar preferencias de accesibilidad
  const handlePreferenceChange = (option, value) => {
    if (option === "reset") {
      setPreferences({ ...preferenciasIniciales });
      return;
    }

    setPreferences((prev) => ({
      ...prev,
      [option]: value,
    }));
  };

  // Clases de accesibilidad
  const appClasses = [
    "app",
    `app--font-${preferences.fontSize}`,
    preferences.highContrast && "app--high-contrast",
    preferences.reduceMotion && "app--reduce-motion",
    preferences.underlineLinks && "app--underline-links",
    preferences.increaseSpacing && "app--increase-spacing",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={appClasses}>
      <Navbar
        preferences={preferences}
        onPreferenceChange={handlePreferenceChange}
        idioma={idioma}
        setIdioma={setIdioma}
      />

      <main>
        <Hero idioma={idioma} />

      {cargandoCategorias ? (
        <p>Cargando categorías...</p>
      ) : (
        <CategoryList
          categorias={categorias}
          idioma={idioma}
        />
      )}
        {cargandoEventos ? (
          <p>Cargando eventos...</p>
        ) : errorEventos ? (
          <p>{errorEventos}</p>
        ) : (
          <EventSection
            id="destacados"
            title={translations[idioma].events.featured}
            description={translations[idioma].events.featuredDescription}
            events={eventosDestacados}
            idioma={idioma}
          />
        )}

       
      {cargandoProximos ? (
      <p>Cargando próximos eventos...</p>
    ) : errorProximos ? (
      <p>{errorProximos}</p>
    ) : (
      <EventSection
        id="proximamente"
        title={translations[idioma].events.upcoming}
        description={translations[idioma].events.upcomingDescription}
        events={eventosProximos}
        idioma={idioma}
      />
    )}

      </main>

      <Footer idioma={idioma} />
    </div>
  );
}

export default App;

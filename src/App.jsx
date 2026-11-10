import { useState } from "react";
import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryList from "./components/CategoryList";
import EventSection from "./components/EventSection";

import {
  featuredEvents,
  upcomingEvents,
} from "./data/events";

const preferenciasIniciales = {
  fontSize: "normal",
  highContrast: false,
  reduceMotion: false,
  underlineLinks: false,
  increaseSpacing: false,
};

function App() {
  const [idioma, setIdioma] = useState("ES");
  const [preferences, setPreferences] = useState(
    preferenciasIniciales
  );

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
        <Hero />
        <CategoryList />

        <EventSection
          id="destacados"
          title="Destacados de la semana"
          description="Los eventos con más entradas vendidas en los últimos 7 días"
          events={featuredEvents}
        />

        <EventSection
          id="proximamente"
          title="Próximamente en Manizales"
          description="Cambia la ciudad desde el buscador"
          events={upcomingEvents}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;

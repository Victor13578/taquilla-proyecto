import { useEffect, useState } from "react";
import "./App.css";
import { translations } from "./data/translations";

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
  const [idioma, setIdioma] = useState(() => {
  const idiomaGuardado = localStorage.getItem("idioma");

  return idiomaGuardado === "EN" ? "EN" : "ES";
});  
useEffect(() => {
    localStorage.setItem("idioma", idioma);
  }, [idioma]);
  
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
        <Hero idioma={idioma} />
        <CategoryList idioma={idioma} />
        <EventSection
          id="destacados"
          title={translations[idioma].events.featured}
          description={translations[idioma].events.featuredDescription}
          events={featuredEvents}
          idioma={idioma}
        />

            <EventSection
      id="proximamente"
      title={translations[idioma].events.upcoming}
      description={translations[idioma].events.upcomingDescription}
      events={upcomingEvents}
      idioma={idioma}
    />
      </main>
 
      <Footer idioma={idioma} />
    </div>
  );
}

export default App;

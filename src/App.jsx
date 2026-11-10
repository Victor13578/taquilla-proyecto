import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryList from "./components/CategoryList";
import EventSection from "./components/EventSection";

import {
  featuredEvents,
  upcomingEvents,
} from "./data/events";

function App() {
  return (
    <>
      <Navbar />

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
    </>
  );
}

export default App;

import EventCard from "./EventCard";
import { translations } from "../data/translations";
import "./EventSection.css";

function EventSection({ id, title, description, events, idioma }) {
  const t = translations[idioma].events;

  return (
    <section className="event-section" id={id}>

      <header className="event-section__header">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <a href={`#${id}`}>
          {t.viewAll} <span aria-hidden="true">→</span>
        </a>
      </header>

      <div className="event-section__grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            idioma={idioma}
          />
        ))}
      </div>

    </section>
  );
}

export default EventSection;

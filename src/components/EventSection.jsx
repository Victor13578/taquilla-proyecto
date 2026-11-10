
import EventCard from "./EventCard";
import "./EventSection.css";

function EventSection({ id, title, description, events }) {
  return (
    <section className="event-section" id={id}>

      <header className="event-section__header">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <a href={`#${id}`}>
          Ver todos <span aria-hidden="true">→</span>
        </a>
      </header>

      <div className="event-section__grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}
      </div>

    </section>
  );
}

export default EventSection;

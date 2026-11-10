
import "./EventCard.css";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function EventCard({ event }) {
  return (
    <article className="event-card">

      {/* Afiche geométrico */}
      <div
        className={`event-card__artwork event-card__artwork--${event.artwork}`}
        aria-hidden="true"
      />

      <div className="event-card__content">

        <span className="event-card__category">
          {event.category}
        </span>

        <h3 className="event-card__title">
          {event.title}
        </h3>

        <div className="event-card__details">

          <div className="event-card__detail">
            <CalendarIcon />
            <span>{event.date}</span>
          </div>

          <div className="event-card__detail">
            <LocationIcon />
            <span>{event.location}</span>
          </div>

        </div>

        <div className="event-card__footer">

          <div className="event-card__price">
            <span>Desde</span>
            <strong>{event.price}</strong>
          </div>

          <a
            className="event-card__button"
            href={event.href || "#"}
            aria-label={`Ver evento: ${event.title}`}
          >
            Ver evento
          </a>

        </div>
      </div>
    </article>
  );
}

export default EventCard;
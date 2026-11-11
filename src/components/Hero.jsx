
import "./Hero.css";
import { translations } from "../data/translations";

function Hero({ idioma }) {
  const t = translations[idioma].hero;

  const handleSearch = (event) => {
    event.preventDefault();
    // La conexión con la API se implementará después.
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero__layout">

        {/* Columna izquierda: presentación y buscador */}
        <div className="hero__content">

          <span className="hero__season">
            {t.season}
          </span>

          <h1 className="hero__title">
            {t.title}
          </h1>

          <p className="hero__description">
            {t.description}
          </p>

          {/* Buscador */}
          <form
            className="hero__search"
            onSubmit={handleSearch}
          >
            <label className="hero__field">
              <span className="hero__field-label">
                {t.what}
              </span>

              <span className="hero__field-control">
                <span aria-hidden="true">⌕</span>
                <input
                  type="search"
                  placeholder={t.eventPlaceholder}
                  aria-label={t.eventPlaceholder}
                />
              </span>
            </label>

            <label className="hero__field">
              <span className="hero__field-label">
                {t.where}
              </span>

              <span className="hero__field-control">
                <span aria-hidden="true">⌖</span>
                <input
                  type="text"
                  defaultValue={t.city}
                  aria-label={t.where}
                />
              </span>
            </label>

            <label className="hero__field">
              <span className="hero__field-label">
                {t.when}
              </span>

              <span className="hero__field-control">
                <span aria-hidden="true">▦</span>
                <select defaultValue="any" aria-label={t.when}>
                  <option value="any">{t.anyDate}</option>
                  <option value="today">{t.today}</option>
                  <option value="week">{t.week}</option>
                  <option value="month">{t.month}</option>
                </select>
              </span>
            </label>

            <button
              className="hero__search-button"
              type="submit"
            >
              {t.search}
            </button>
          </form>

          {/* Búsquedas populares */}
          <div className="hero__popular">
            <span>{t.popular}</span>

            {t.popularSearches.map((busqueda) => (
              <a
                href="#eventos"
                key={busqueda}
              >
                {busqueda}
              </a>
            ))}
          </div>

        </div>

        {/* Columna derecha: evento destacado */}
        <aside className="hero__featured">

          <div className="hero__featured-card">

            <span className="hero__featured-label">
              {t.featured}
            </span>

            <h2>Festival Niebla 2026</h2>

            <p>
              {t.featuredDate}
            </p>

            <div className="hero__featured-bottom">
              <div>
                <span>{t.from}</span>
                <strong>$140.000</strong>
              </div>

              <a href="#festival-niebla">
                {t.viewEvent}
              </a>
            </div>

          </div>

        </aside>

      </div>
    </section>
  );
}

export default Hero;


import "./Hero.css";

const busquedasPopulares = [
  "Salsa",
  "Stand-up",
  "Fútbol",
  "Festivales fin de año",
];

function Hero() {
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
            Temporada nov - dic 2026
          </span>

          <h1 className="hero__title">
            Tu próxima noche empieza aquí
          </h1>

          <p className="hero__description">
            Conciertos, teatro, deportes y festivales.
            Busca por categoría, fecha o ciudad y consulta
            todos los detalles de cada evento.
          </p>

          {/* Buscador */}
          <form
            className="hero__search"
            onSubmit={handleSearch}
          >
            <label className="hero__field">
              <span className="hero__field-label">Qué</span>

              <span className="hero__field-control">
                <span aria-hidden="true">⌕</span>
                <input
                  type="search"
                  placeholder="Evento o artista"
                  aria-label="Buscar evento o artista"
                />
              </span>
            </label>

            <label className="hero__field">
              <span className="hero__field-label">Dónde</span>

              <span className="hero__field-control">
                <span aria-hidden="true">⌖</span>
                <input
                  type="text"
                  defaultValue="Manizales"
                  aria-label="Ciudad"
                />
              </span>
            </label>

            <label className="hero__field">
              <span className="hero__field-label">Cuándo</span>

              <span className="hero__field-control">
                <span aria-hidden="true">▦</span>
                <select defaultValue="any" aria-label="Fecha">
                  <option value="any">Cualquier fecha</option>
                  <option value="today">Hoy</option>
                  <option value="week">Esta semana</option>
                  <option value="month">Este mes</option>
                </select>
              </span>
            </label>

            <button className="hero__search-button" type="submit">
              Buscar
            </button>
          </form>

          {/* Búsquedas populares */}
          <div className="hero__popular">
            <span>Populares:</span>

            {busquedasPopulares.map((busqueda) => (
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
              Destacado
            </span>

            <h2>Festival Niebla 2026</h2>

            <p>
              Vie 20 nov · Parque del Bosque
            </p>

            <div className="hero__featured-bottom">
              <div>
                <span>Desde</span>
                <strong>$140.000</strong>
              </div>

              <a href="#festival-niebla">
                Ver evento
              </a>
            </div>

          </div>

        </aside>

      </div>
    </section>
  );
}

export default Hero;

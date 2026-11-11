const estilosPorCategoria = {
  conciertos: "plum",
  teatro: "sand",
  deportes: "forest",
  festivales: "midnight",
  comedia: "lavender",
  familiares: "blue",
};

export function adaptarEvento(evento) {
  const fecha = new Date(evento.fecha);

  const fechaFormateada = new Intl.DateTimeFormat("es-CO", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Bogota",
  }).format(fecha);

  return {
    id: evento.id,
    slug: evento.slug,
    title: evento.titulo,
    category: evento.categoria,
    date: fechaFormateada,
    location: evento.recinto?.nombre || "Ubicación por confirmar",
    price: new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(evento.precioDesde),
    artwork:
      estilosPorCategoria[evento.categoria] || "plum",
    href: `#${evento.slug}`,
  };
}

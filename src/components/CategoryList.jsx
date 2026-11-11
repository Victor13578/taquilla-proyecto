import "./CategoryList.css";
import { translations } from "../data/translations";

const categories = [
  { id: 1, key: "concerts", count: 42, icon: "music" },
  { id: 2, key: "theater", count: 18, icon: "star" },
  { id: 3, key: "sports", count: 12, icon: "trophy" },
  { id: 4, key: "festivals", count: 9, icon: "flag" },
  { id: 5, key: "comedy", count: 7, icon: "smile" },
  { id: 6, key: "family", count: 11, icon: "users" },
];

function CategoryIcon({ name }) {
  const icons = {
    music: (
      <>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </>
    ),

    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),

    trophy: (
      <>
        <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
        <path d="M8 6H4v2a4 4 0 0 0 4 4" />
        <path d="M16 6h4v2a4 4 0 0 1-4 4" />
        <path d="M12 13v5m-4 3h8m-6-3h4" />
      </>
    ),

    flag: (
      <>
        <path d="M5 21V4" />
        <path d="M5 4c5-4 9 4 14 0v11c-5 4-9-4-14 0" />
      </>
    ),

    smile: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14s1.5 3 4 3 4-3 4-3" />
        <path d="M9 9h.01M15 9h.01" />
      </>
    ),

    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2H3Z" />
        <path d="M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v1h-4" />
      </>
    ),
  };

  return (
    <svg
      className="category-card__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function CategoryList({ idioma }) {
  const t = translations[idioma].categories;

  return (
    <section
      className="category-list"
      aria-label={t.ariaLabel}
    >
      {categories.map((category) => (
        <article
          className="category-card"
          key={category.id}
        >
          <div className="category-card__icon-wrapper">
            <CategoryIcon name={category.icon} />
          </div>

          <div className="category-card__info">
            <h3>{t[category.key]}</h3>

            <span>
              {category.count} {t.eventCount}
            </span>
          </div>
        </article>
      ))}
    </section>
  );
}

export default CategoryList;

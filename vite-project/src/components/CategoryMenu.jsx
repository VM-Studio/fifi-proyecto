const CATEGORIES = [
  { label: "HOMBRE",    bg: "https://i.postimg.cc/WzPPwhBR/Screenshot-2025-09-09-at-8-40-38-AM.png", href: "/buscar?gender=Hombre" },
  { label: "MUJER",       bg: "https://i.postimg.cc/tCq4KMMK/Screenshot-2025-09-09-at-8-45-15-AM.png", href: "/buscar?gender=Mujer" },
  { label: "NIÑOS", bg: "https://i.postimg.cc/8zLXLZ1C/Screenshot-2025-09-09-at-8-48-01-AM.png", href: "/buscar?gender=Niños" },
  { label: "OFERTAS",   bg: "https://i.postimg.cc/Xq0kNbCc/Screenshot-2025-09-09-at-8-50-05-AM.png", href: "/ofertas" },
];

export default function CategoryMenu() {
  return (
    <section className="section category-section">
      <div className="container">
        <h2 className="section__title category-title">Comprar por categoría</h2>

        <div className="grid grid--4">
          {CATEGORIES.map(c => (
            <a
              className="cat cat--bg"
              href={c.href}
              key={c.label}
              style={{ backgroundImage: `url('${c.bg}')` }}
            >
              <span className="cat__label">{c.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


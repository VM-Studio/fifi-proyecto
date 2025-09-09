const CATEGORIES = [
  { label: "Hombre",  img: "/cat-men.jpg",   href: "#" },
  { label: "Mujer",   img: "/cat-women.jpg", href: "#" },
  { label: "Niños",   img: "/cat-kids.jpg",  href: "#" },
  { label: "Ofertas", img: "/cat-sale.jpg",  href: "#" },
];

export default function CategoryMenu() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Comprar por categoría</h2>
        <div className="grid grid--4">
          {CATEGORIES.map(c => (
            <a className="cat" href={c.href} key={c.label}>
              <img src={c.img} alt={c.label} />
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


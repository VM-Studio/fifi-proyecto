// src/components/FeaturedIcons.jsx
export default function FeaturedIcons({ title = "Compra nuestros iconos", items = [] }) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section__title">{title}</h2>
  
          <div className="icons__grid">
            {items.map((it) => (
              <a key={it.label} href={it.href || "#"} className="icons__item">
                <img src={it.img} alt={it.label} />
                <span className="icons__tag">{it.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
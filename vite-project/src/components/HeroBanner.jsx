import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="container hero__content">
        <h1>Encontrá tu próxima Prenda Deportiva</h1>
        <p>Rendimiento y Estilo para todos los días.</p>
        <div className="hero__cta">
          <Link className="btn btn--dark" to="/buscar">Comprar Ahora</Link>
          <Link className="btn" to="/novedades">Ver Lanzamientos</Link>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="container hero__content">
      <h1>
  <span >Encontrá tu próxima Prenda Deportiva </span>
</h1>


        <p><b>Rendimiento y Estilo para todos los días.</b></p>
        <div className="hero__cta">
          <Link className="btn btn--dark" to="/buscar">Comprar Ahora</Link>
          <Link className="btn" to="/novedades">Ver Lanzamientos</Link>
        </div>
      </div>
    </section>
  );
}

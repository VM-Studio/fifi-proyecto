export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h4>Ayuda</h4>
          <a href="#">Envíos</a>
          <a href="#">Devoluciones</a>
          <a href="#">Soporte</a>
        </div>
        <div>
          <h4>Acerca de</h4>
          <a href="#">Nosotros</a>
          <a href="#">Sustentabilidad</a>
          <a href="#">Prensa</a>
        </div>
        <div>
          <h4>Redes</h4>
          <a href="#">Instagram</a>
          <a href="#">X</a>
          <a href="#">YouTube</a>
        </div>
      </div>
      <div className="footer__copy">© {new Date().getFullYear()} Demo Store</div>
    </footer>
  );
}

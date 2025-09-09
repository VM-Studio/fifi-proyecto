import { Link } from "react-router-dom";

// src/components/Navbar.jsx
export default function Navbar({ onLogout }) {
  return (
    <header className="nav">
      <div className="container nav__row">
        {/* Logo + marca */}
        <div className="nav__logo">
          <a href="/" className="brand" aria-label="Inicio NIXED">
            <svg
              className="logo-mark"
              width="24"
              height="24"
              viewBox="0 0 64 64"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="32" cy="32" r="30" fill="#FF6A00" />
              <path
                d="M30 8 L10 36 H28 L20 56 L54 24 H36 L44 8 Z"
                fill="currentColor"
              />
            </svg>
            <span>NIXED</span>
          </a>
        </div>

        {/* Links principales */}
        <nav className="nav__links" aria-label="Secciones principales">
          <Link to="/buscar?gender=Hombre">Hombre</Link>
          <Link to="/buscar?gender=Mujer">Mujer</Link>
          <Link to="/buscar?gender=Niños">Niños</Link>
          <Link to="/ofertas">Ofertas</Link>
          <Link to="/novedades">Novedades</Link>
        </nav>

        {/* Acciones derechas */}
        <div className="nav__right">
          <form
            action="/buscar"
            method="GET"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <input
              name="q"
              className="nav__search"
              placeholder="Buscar"
              aria-label="Buscar productos"
            />
          </form>
          <button className="icon-btn" aria-label="Favoritos">
            ♡
          </button>
          <button className="icon-btn" aria-label="Carrito">
            🛒
          </button>
          <button
            onClick={onLogout}
            className="icon-btn"
            aria-label="Cerrar sesión"
            style={{
              marginLeft: "0.5rem",
              backgroundColor: "#ff6b35",
              color: "white",
              borderRadius: "8px",
              fontWeight: "600",
              padding: "0.5rem 1rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e55a2b")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6b35")}
          >
            Salir
          </button>
        </div>
      </div>
    </header>
  );
}

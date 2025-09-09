import Navbar from "../components/Navbar.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import CategoryMenu from "../components/CategoryMenu.jsx";
import ProductList from "../components/ProductList.jsx";
import PromoBanner from "../components/PromoBanner.jsx";
import Footer from "../components/Footer.jsx";
import FeaturedIcons from "../components/FeaturedIcons.jsx"; // 👈 nuevo

export default function Home({ onLogout }) {
  return (
    <>
      <Navbar onLogout={onLogout} />
      <div className="main-content">
        <main>
          <HeroBanner />
          <CategoryMenu />

          {/* Reemplaza Novedades (tarjetas) por 3 imágenes grandes */}
          <FeaturedIcons
            title="Nuestros Íconos"
            items={[
              {
                label: "A'One 'LEO LIGHTS'",
                img: "https://i.postimg.cc/Wzv8Ggvj/Screenshot-2025-09-09-at-12-16-24-AM.png",
                href: "#",
              },
              {
                label: "Mercurial Superfly",
                img: "https://i.postimg.cc/Wbt8MNRd/Screenshot-2025-09-09-at-12-21-15-AM.png",
                href: "#",
              },
              {
                label: "NIKE Hyperdrunk",
                img: "https://i.postimg.cc/KY9rKw9P/Screenshot-2025-09-09-at-12-24-41-AM.png",
                href: "#",
              },
            ]}
          />

          {/* <PromoBanner /> */}

          <ProductList title="Últimas Tendencias" />
        </main>
      </div>
      <Footer />
    </>
  );
}

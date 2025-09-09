import Navbar from "../components/Navbar.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import CategoryMenu from "../components/CategoryMenu.jsx";
import ProductList from "../components/ProductList.jsx";
import PromoBanner from "../components/PromoBanner.jsx";
import Footer from "../components/Footer.jsx";

export default function Home({ onLogout }) {
  return (
    <>
      <Navbar onLogout={onLogout} />
      <div className="main-content">
        <main>
          <HeroBanner />
          <CategoryMenu />
          <ProductList title="Novedades" />
          <PromoBanner />
          <ProductList title="Lo más buscado" />
        </main>
      </div>
      <Footer />
    </>
  );
}

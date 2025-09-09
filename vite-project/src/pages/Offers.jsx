import React, { useEffect, useState } from 'react';
import { PRODUCTS } from '../data/products';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductList3 from "../components/ProductList3.jsx";

const Offers = () => {
  const [offerProducts, setOfferProducts] = useState([]);

  useEffect(() => {
    // Carga los productos que tienen el tag "Oferta"
    const offerProducts = PRODUCTS.filter(product => product.tag === "Oferta");
    setOfferProducts(offerProducts);
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-content">
        <main className="search-page">
          <div className="container search-layout">
            <div className="results">
              <div className="results__head">
                <h1>Ofertas Especiales</h1>
                <h2>
                  {offerProducts.length} Producto{offerProducts.length !== 1 && "s"} en Oferta
                </h2>
              </div>
              {offerProducts.length === 0 ? (
                <div className="no-results">
                  <p>No hay ofertas disponibles en este momento.</p>
                </div>
              ) : (
                <ProductList3 
                  title="Ofertas Disponibles" 
                  products={offerProducts}
                />
              )}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Offers;

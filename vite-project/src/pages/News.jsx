import React, { useEffect, useState } from 'react';
import { PRODUCTS } from '../data/products';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductList3 from "../components/ProductList3.jsx";

const News = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    // Carga los productos que tienen el tag "Nuevo"
    const newProducts = PRODUCTS.filter(product => product.tag === "Nuevo");
    setNewProducts(newProducts);
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-content">
        <main className="search-page">
          <div className="container search-layout">
            <div className="results">
              <div className="results__head">
                <h1>Nuevos Lanzamientos</h1>
                <h2>
                  {newProducts.length} Producto{newProducts.length !== 1 && "s"} Nuevo{newProducts.length !== 1 && "s"}
                </h2>
              </div>
              {newProducts.length === 0 ? (
                <div className="no-results">
                  <p>No hay productos nuevos disponibles en este momento.</p>
                </div>
              ) : (
                <ProductList3 
                  title="Últimos Lanzamientos" 
                  products={newProducts}
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

export default News;

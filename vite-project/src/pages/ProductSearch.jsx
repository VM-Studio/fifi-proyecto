import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductList3 from "../components/ProductList3.jsx";
import SearchFilters from "../components/SearchFilters.jsx";
import ProductSearchLogic from "../components/ProductSearchLogic.jsx";

export default function ProductSearch() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <main className="search-page">
          <div className="container search-layout">
            <ProductSearchLogic>
              {({ values, lists, filtered, setParam, clearAll }) => (
                <>
                  <SearchFilters
                    values={values}
                    lists={lists}
                    onChange={setParam}
                    onClear={clearAll}
                  />
                  <div className="results">
                    <div className="results__head">
                      <h2>
                        {filtered.length} Producto{filtered.length !== 1 && "s"}
                      </h2>
                    </div>
                    <ProductList3 title="Resultados" products={filtered} />
                  </div>
                </>
              )}
            </ProductSearchLogic>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

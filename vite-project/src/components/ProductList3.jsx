import { PRODUCTS } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

// Lista de productos en grilla de 3 columnas (reutiliza ProductCard y datos existentes)
export default function ProductList3({ title = "Productos", products = PRODUCTS }) {
  const items = products ?? [];
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">{title}</h2>
        <div className="grid grid--3">
          {items.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

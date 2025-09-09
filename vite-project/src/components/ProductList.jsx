import { PRODUCTS } from "../data/products.js"; 
import ProductCard from "./ProductCard.jsx";

export default function ProductList({ title = "Productos" }) {
  const items = PRODUCTS ?? []; 
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">{title}</h2>

        <div className="row row--scroll">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}




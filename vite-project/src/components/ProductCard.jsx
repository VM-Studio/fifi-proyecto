import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { id, title, subtitle, price, img, tag } = product;
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(`/producto/${id}`);
  };

  return (
    <article className="card">
      <div className="card__imgwrap">
        <img src={img} alt={title} />
        {tag && <span className="card__tag">{tag}</span>}
      </div>

      <h3 className="card__title">{title}</h3>
      <p className="card__subtitle">{subtitle}</p>

      <div className="card__row">
        <span className="card__price">${price}</span>
        <button onClick={handleBuyClick}>Comprar</button>
      </div>
    </article>
  );
}



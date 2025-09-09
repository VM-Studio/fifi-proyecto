import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  // id de useParams es string, pero en PRODUCTS es number
  const product = PRODUCTS.find((p) => String(p.id) === id);

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="main-content">
      <div
        style={{
          padding: "2rem",
          maxWidth: 900,
          margin: "0 auto",
          fontFamily: "inherit",
        }}
      >
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div
            style={{
              flex: "1 1 300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={product.img}
              alt={product.title}
              style={{
                maxWidth: "350px",
                borderRadius: "12px",
                boxShadow: "0 2px 12px #eee",
              }}
            />
          </div>
          <div style={{ flex: "2 1 400px" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: 8 }}>
              {product.title}
            </h2>
            <p style={{ color: "#555", fontSize: "1.1rem", marginBottom: 16 }}>
              {product.subtitle}
            </p>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginBottom: 16,
              }}
            >
              Precio: ${product.price}
            </div>
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="size"
                style={{ fontWeight: "bold", marginRight: 8 }}
              >
                Talle:
              </label>
              <select
                id="size"
                style={{
                  padding: "6px 12px",
                  borderRadius: 6,
                  border: "1px solid #ccc",
                }}
              >
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
              </select>
            </div>
            <button
              style={{
                background: "#111",
                color: "#fff",
                padding: "12px 32px",
                border: "none",
                borderRadius: 8,
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                marginBottom: 24,
              }}
            >
              Comprar
            </button>
            <div style={{ color: "#444", fontSize: "1rem", lineHeight: 1.5 }}>
              {product.description ||
                "Este producto es ideal para quienes buscan comodidad y estilo en cada paso. Inspirado en los clásicos, con materiales de alta calidad y diseño moderno."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

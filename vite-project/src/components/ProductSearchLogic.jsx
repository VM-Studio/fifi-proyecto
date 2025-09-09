// Componente contenedor que encapsula la lógica de búsqueda/filtrado
// Uso: <ProductSearchLogic>{({values, lists, filtered, setParam, clearAll}) => (...)}</ProductSearchLogic>
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { PRODUCTS } from '../data/products.js';

export default function ProductSearchLogic({ children }) {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);

  const values = {
    q: (params.get('q') || '').trim(),
    cat: params.get('cat') || '',
    gender: params.get('gender') || '',
    size: params.get('size') || '',
    min: params.get('min') || '',
    max: params.get('max') || ''
  };

  const lists = {
    categories: Array.from(new Set(PRODUCTS.map(p => p.category))).sort(),
    genders: Array.from(new Set(PRODUCTS.map(p => p.gender))).sort(),
    sizes: Array.from(new Set(PRODUCTS.flatMap(p => p.sizes))).sort((a,b)=>a-b)
  };

  function setParam(key, value) {
    const next = new URLSearchParams(search);
    if (!value) next.delete(key); else next.set(key, value);
    navigate(`/buscar?${next.toString()}`);
  }
  function clearAll() { navigate('/buscar'); }

  const filtered = useMemo(() => {
    const { q, cat, gender, size, min, max } = values;
    return PRODUCTS.filter(p => {
      if (q && !(`${p.title} ${p.subtitle} ${p.tag || ''}`.toLowerCase().includes(q.toLowerCase()))) return false;
      if (cat && p.category !== cat) return false;
      if (gender && p.gender !== gender) return false;
      if (size && !p.sizes.includes(Number(size))) return false;
      if (min && p.price < Number(min)) return false;
  if (max && p.price > Number(max)) return false;
      return true;
    });
  }, [values]);

  return children({ values, lists, filtered, setParam, clearAll });
}

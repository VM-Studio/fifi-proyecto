// Componente presentacional de filtros.
export default function SearchFilters({ values, lists, onChange, onClear }) {
  const { q, cat, gender, size, min, max } = values;
  const { categories = [], genders = [], sizes = [] } = lists;

  return (
    <aside className="filters">
      <div className="filters__head">
        <h3>Filtros</h3>
        <button type="button" className="btn btn--sm" onClick={onClear}>Limpiar</button>
      </div>

      <div className="filter-block">
        <label className="filter-label">Buscar</label>
        <input value={q} onChange={e=>onChange("q", e.target.value)} placeholder="Nombre, tag..." />
      </div>

      <div className="filter-block">
        <label className="filter-label">Categoría</label>
        <select value={cat} onChange={e=>onChange("cat", e.target.value)}>
          <option value="">Todas</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="filter-block">
        <label className="filter-label">Género</label>
        <select value={gender} onChange={e=>onChange("gender", e.target.value)}>
          <option value="">Todos</option>
          {genders.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>

      <div className="filter-block">
        <label className="filter-label">Talle</label>
        <select value={size} onChange={e=>onChange("size", e.target.value)}>
          <option value="">Todos</option>
          {sizes.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="filter-block">
        <label className="filter-label">Precio Min</label>
        <input type="number" value={min} onChange={e=>onChange("min", e.target.value)} />
        <label className="filter-label" style={{marginTop:8}}>Precio Max</label>
        <input type="number" value={max} onChange={e=>onChange("max", e.target.value)} />
      </div>
    </aside>
  );
}

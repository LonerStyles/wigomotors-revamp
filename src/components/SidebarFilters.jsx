import "../styles/SidebarFilters.css";

export default function SidebarFilters() {
  const filterOptions = [
    "Tipo de auto",
    "Marca",
    "Año",
    "Modelo",
    "Precio",
    "Kilometraje",
    "Combustible",
    "Año",
    "Color",
    "Transmisión",
  ];

  return (
    <div className="sidebar-filters">
      <h3 className="sidebar-title">Filtros</h3>
      <div className="filters-list">
        {filterOptions.map((filter, index) => (
          <div key={index} className="filter-item">
            <span>{filter}</span>
            <span className="filter-arrow">+</span>
          </div>
        ))}
      </div>
    </div>
  );
}

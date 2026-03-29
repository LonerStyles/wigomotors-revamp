import SidebarFilters from "../components/SidebarFilters";
import CarCard from "../components/CarCard";
import autosData from "../catalogo.json";
import "../styles/Catalogo.css";

export default function Catalogo() {
  return (
    <div className="catalogo-view-container">
      <div className="breadcrumbs">
        <a href="#">
          <span className="breadcrumbs-start">← Vehiculos</span>
        </a>
        <span className="breadcrumbs-line">|</span> <span className="breadcrumbs-current">Todo</span>
      </div>

      <h1 className="view-title">Autos, SUV’s y Camionetas en Wigo Motors</h1>
      <p className="view-description">
        Encuentra lo que buscas en los filtros y descubre la gran variedad de
        marcas, categorías y presupuestos que tenemos para ti.
      </p>

      <div className="top-bar-catalog">
        <div className="top-bar-left">
          <button className="btn-all-filter">Todo</button>
          <div className="vertical-divider"></div>
          <span className="vehicles-count">
            Mostrando <strong>202</strong> Vehículos
          </span>
        </div>

        <div className="top-bar-center">
          <div className="search-wrapper">
            <svg
              className="search-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Buscar" />
          </div>
        </div>

        <div className="top-bar-right">
          <div className="select-wrapper">
            <select>
              <option>Ordenar</option>
              <option>Precio: Menor a Mayor</option>
              <option>Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>
      </div>

      <div className="main-catalog-layout">
        <SidebarFilters />
        <div className="cards-grid">
          {autosData.map((auto) => (
            <CarCard
              key={auto.id}
              imagen={auto.imagen}
              categoria={auto.categoria}
              marca={auto.marca}
              modelo={auto.modelo}
              precioUsd={auto.precioUsd}
              precioSoles={auto.precioSoles}
              anio={auto.anio}
              transmision={auto.transmision}
              combustible={auto.combustible}
            />
          ))}
        </div>
      </div>

      <div className="catalog-pagination">
        <button className="page-btn page-btn-previous page-btn-inactive">
          ← Anterior
        </button>
        <div className="page-line"></div>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <span className="dots">...</span>
        <button className="page-btn">12</button>
        <div className="page-line"></div>
        <button className="page-btn page-btn-next">Siguiente →</button>
      </div>
    </div>
  );
}

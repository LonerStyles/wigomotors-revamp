import { useState, useEffect } from "react";
import CarCard from "../components/CarCard";
import autosData from "../catalogo.json";
import "../styles/Catalogo.css";

export default function Catalogo() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [precioMax, setPrecioMax] = useState(0);
  const elementosPorPagina = 9;
  const indiceFinal = paginaActual * elementosPorPagina;
  const indiceInicio = indiceFinal - elementosPorPagina;
  const autosVisibles = autosData.slice(indiceInicio, indiceFinal);
  const totalPaginas = Math.ceil(autosData.length / elementosPorPagina);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [paginaActual]);

  return (
    <div className="catalogo-view-container">
      <div className="breadcrumbs">
        <a href="#">
          <span className="breadcrumbs-start">← Vehiculos</span>
        </a>
        <span className="breadcrumbs-line">|</span>{" "}
        <span className="breadcrumbs-current">Todo</span>
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
            Mostrando <strong>{autosData.length}</strong> Vehículos
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
        <aside className="filters-sidebar">
          <div className="filter-group">
            <h3 className="filter-main-label">Filtros</h3>
          </div>

          
          <div className="filter-section">
            <h4 className="filter-subtitle">Tipo de auto</h4>
            <div className="options-list">
              {["SUV", "Sedán", "Hatchback", "Camioneta"].map((tipo) => (
                <label key={tipo} className="filter-label">
                  <input type="checkbox" className="native-input" />
                  {tipo}
                </label>
              ))}
            </div>
          </div>

          <hr className="filter-hr" />

          <div className="filter-section">
            <h4 className="filter-subtitle">Marca</h4>
            <select className="filter-select">
              <option value="">Todas las marcas</option>
              <option value="toyota">Toyota</option>
              <option value="hyundai">Hyundai</option>
              <option value="kia">Kia</option>
            </select>
          </div>

          <div className="filter-section">
            <h4 className="filter-subtitle">Modelo</h4>
            <select className="filter-select">
              <option value="">Selecciona modelo</option>

            </select>
          </div>

          <div className="filter-section">
            <h4 className="filter-subtitle">Año</h4>
            <select className="filter-select">
              <option value="">Cualquier año</option>
              {[2025, 2024, 2023, 2022, 2021, 2020].map(anio => (
                <option key={anio} value={anio}>{anio}</option>
              ))}
            </select>
          </div>

          <hr className="filter-hr" />

          <div className="filter-section">
            <h4 className="filter-subtitle">Presupuesto Máximo</h4>
            <input
              type="range"
              min="5000"
              max="150000"
              step="1000"
              value={precioMax}
              onChange={(e) => setPrecioMax(e.target.value)}
              className="native-slider"
            />
            <div className="price-display">
              <span>Hasta: <strong>${Number(precioMax).toLocaleString()}</strong></span>
            </div>
          </div>          

          <hr className="filter-hr" />

          <div className="filter-section">
            <h4 className="filter-subtitle">Combustible</h4>
            <div className="options-list">
              {["Gasolina", "Diesel", "Híbrido"].map((f) => (
                <label key={f} className="filter-label">
                  <input type="checkbox" className="native-input" />
                  {f}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-subtitle">Transmisión</h4>
            <div className="options-list">
              {["Automática", "Mecánica"].map((t) => (
                <label key={t} className="filter-label">
                  <input type="checkbox" className="native-input" />
                  {t}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-subtitle">Color</h4>
            <select className="filter-select">
              <option value="">Todos los colores</option>
              <option value="blanco">Blanco</option>
              <option value="negro">Negro</option>
              <option value="gris">Gris</option>
              <option value="rojo">Rojo</option>
            </select>
          </div>
        </aside>

        <div className="cards-grid">
          {autosVisibles.map((auto) => (
            <CarCard key={auto.id} {...auto} />
          ))}
        </div>
      </div>

      <div className="catalog-pagination">
        <button
          className={`page-btn page-btn-previous ${paginaActual === 1 ? "page-btn-inactive" : ""}`}
          onClick={() => setPaginaActual(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          ← Anterior
        </button>
        <div className="page-line"></div>
        {[...Array(totalPaginas)].map((_, index) => {
          const numeroPagina = index + 1;
          return (
            <button
              key={numeroPagina}
              className={`page-btn ${paginaActual === numeroPagina ? "active" : ""}`}
              onClick={() => setPaginaActual(numeroPagina)}
            >
              {numeroPagina}
            </button>
          );
        })}

        <div className="page-line"></div>

        <button
          className={`page-btn page-btn-next ${paginaActual === totalPaginas ? "pagina-btn-inactive" : ""}`}
          onClick={() => setPaginaActual(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}

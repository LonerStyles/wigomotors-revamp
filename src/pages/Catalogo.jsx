import { useState, useEffect, useMemo } from "react";
import CarCard from "../components/CarCard";
import autosData from "../catalogo.json";
import "../styles/Catalogo.css";
import { useLocation } from "react-router-dom";

export default function Catalogo() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const stateDelBanner = location.state || {};

  const categoriaUrl = params.get("categoria") || "pesados";
  const estadoUrl = params.get("estado") || "todos";
  const limitePrecio = categoriaUrl === "pesados" ? 150000 : 40000;

  const [orden, setOrden] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [precioMax, setPrecioMax] = useState(() => {
    return stateDelBanner.precioInit || limitePrecio;
  });

  const [filtros, setFiltros] = useState(() => ({
    tipos: [],
    marca: stateDelBanner.marcaInit || "",
    modelo: "",
    anio: "",
    combustible: [],
    transmision: [],
    color: "",
  }));

  const elementosPorPagina = 9;

  // Traer filtros del form del banner
  useEffect(() => {
    if (location.state) {
      window.history.replaceState({}, document.title);
    }
  });

  // Resetear Url
  const [lastUrlKey, setLastUrlKey] = useState(location.search);
  if (lastUrlKey !== location.search) {
    setLastUrlKey(location.search);
    setPrecioMax(limitePrecio);
    setPaginaActual(1);
    setOrden("");
    setBusqueda("");
  }

  const autosFiltrados = useMemo(() => {
    let resultado = autosData.filter((auto) => {
      if (categoriaUrl === "pesados" && auto.categoria !== "CAMION")
        return false;
      if (categoriaUrl === "pasajeros" && auto.categoria === "CAMION")
        return false;

      if (
        estadoUrl !== "todos" &&
        auto.tipo.toLowerCase() !== estadoUrl.toLowerCase()
      )
        return false;

      const textoBusqueda = busqueda.toLowerCase();
      const coincideMarca = auto.marca.toLowerCase().includes(textoBusqueda);
      const coincideModelo = auto.modelo.toLowerCase().includes(textoBusqueda);
      if (busqueda && !coincideMarca && !coincideModelo) return false;

      if (auto.precioUsd > precioMax) return false;

      if (filtros.tipos.length > 0 && !filtros.tipos.includes(auto.categoria))
        return false;

      if (
        filtros.marca &&
        auto.marca.toUpperCase() !== filtros.marca.toUpperCase()
      )
        return false;

      if (filtros.anio && auto.anio !== filtros.anio.toString()) return false;

      if (
        filtros.combustible.length > 0 &&
        !filtros.combustible.includes(auto.combustible)
      )
        return false;

      if (filtros.transmision.length > 0) {
        const transNormalizada = auto.transmision.endsWith("o")
          ? auto.transmision.slice(0, -1) + "a"
          : auto.transmision;
        if (!filtros.transmision.includes(transNormalizada)) return false;
      }

      return true;
    });

    if (orden === "menor") {
      resultado.sort((a, b) => a.precioUsd - b.precioUsd);
    } else if (orden === "mayor") {
      resultado.sort((a, b) => b.precioUsd - a.precioUsd);
    }

    return resultado;
  }, [precioMax, filtros, categoriaUrl, estadoUrl, orden, busqueda]);

  const handleCheckboxChange = (e, campo) => {
    const { value, checked } = e.target;
    setFiltros((prev) => ({
      ...prev,
      [campo]: checked
        ? [...prev[campo], value]
        : prev[campo].filter((item) => item !== value),
    }));
    setPaginaActual(1);
  };

  const handleSelectChange = (e, campo) => {
    setFiltros((prev) => ({ ...prev, [campo]: e.target.value }));
    setPaginaActual(1);
  };

  const totalPaginas = Math.ceil(autosFiltrados.length / elementosPorPagina);
  const autosVisibles = autosFiltrados.slice(
    (paginaActual - 1) * elementosPorPagina,
    paginaActual * elementosPorPagina,
  );

  // Resetaer scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [paginaActual]);

  const marcasDisponibles = useMemo(() => {
    const marcas = autosData
      .filter((auto) => {
        if (categoriaUrl === "pesados" && auto.categoria !== "CAMION")
          return false;
        if (categoriaUrl === "pasajeros" && auto.categoria === "CAMION")
          return false;
        if (
          estadoUrl !== "todos" &&
          auto.tipo.toLowerCase() !== estadoUrl.toLowerCase()
        )
          return false;
        return true;
      })
      .map((auto) => auto.marca.toUpperCase());
    return [...new Set(marcas)].sort();
  }, [categoriaUrl, estadoUrl]);

  return (
    <div className="catalogo-view-container">
      <div className="breadcrumbs">
        <a href="#">
          <span className="breadcrumbs-start">← Vehiculos</span>
        </a>
        <span className="breadcrumbs-line">|</span>{" "}
        <span className="breadcrumbs-current">Todo</span>
      </div>

      <h1 className="view-title">
        {estadoUrl === "nuevo"
          ? "Autos, Suv's y pickups en Wigo Motors"
          : estadoUrl === "seminuevo"
            ? "Seminuevos Certificados"
            : "Vehículos en Wigo Motors"}
        {categoriaUrl === "pesados" ? " - Camiones" : ""}
      </h1>

      <p className="view-description">
        Encuentra lo que buscas en los filtros y descubre la gran variedad de
        marcas, categorías y presupuestos que tenemos para ti.
      </p>

      <div className="top-bar-catalog">
        <div className="top-bar-left">
          <span className="btn-all-filter">
            {estadoUrl === "nuevo"
              ? "Nuevos"
              : estadoUrl === "seminuevo"
                ? "Seminuevos"
                : categoriaUrl === "pesados"
                  ? "Pesados"
                  : "Todo"}
          </span>
          <div className="vertical-divider"></div>
          <span className="vehicles-count">
            Mostrando <strong>{autosVisibles.length}</strong> Vehículos
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
            <input
              type="text"
              placeholder="Buscar por marca o modelo..."
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value);
                setPaginaActual(1);
              }}
            />
          </div>
        </div>

        <div className="top-bar-right">
          <div className="select-wrapper">
            <select
              value={orden}
              onChange={(e) => {
                setOrden(e.target.value);
                setPaginaActual(1);
              }}
            >
              <option value="">Ordenar</option>
              <option value="menor">Precio: Menor a Mayor</option>
              <option value="mayor">Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>
      </div>

      <div className="main-catalog-layout">
        <aside className="filters-sidebar">
          <h3 className="filter-main-label">Filtros</h3>
          <div className="filter-section">
            <h4 className="filter-subtitle">Tipo de auto</h4>
            <div className="options-list">
              {["SUV", "SEDAN", "PICK UP"].map((tipo) => (
                <label key={tipo} className="filter-label">
                  <input
                    type="checkbox"
                    value={tipo}
                    className="native-input"
                    onChange={(e) => handleCheckboxChange(e, "tipos")}
                  />
                  {tipo}
                </label>
              ))}
            </div>
          </div>

          <hr className="filter-hr" />

          <div className="filter-section">
            <h4 className="filter-subtitle">Presupuesto Máximo</h4>
            {(() => {
              const maxActual = categoriaUrl === "pesados" ? 150000 : 40000;
              const minActual = 5000;
              const valorAjustado = Math.min(
                Math.max(precioMax, minActual),
                maxActual,
              );
              const porcentaje =
                ((valorAjustado - minActual) * 100) / (maxActual - minActual);

              return (
                <input
                  type="range"
                  min={minActual}
                  max={maxActual}
                  step="1000"
                  value={precioMax}
                  onChange={(e) => setPrecioMax(Number(e.target.value))}
                  className="native-slider"
                  style={{
                    background: `linear-gradient(to right, #ee3124 0%, #ee3124 ${porcentaje}%, #e5e7eb ${porcentaje}%, #e5e7eb 100%)`,
                  }}
                />
              );
            })()}

            <div className="price-display">
              <span>
                Hasta: <strong>${precioMax.toLocaleString()}</strong>
              </span>
            </div>
          </div>

          <hr className="filter-hr" />

          <div className="filter-section">
            <h4 className="filter-subtitle">Marca</h4>
            <select
              className="filter-select"
              value={filtros.marca}
              onChange={(e) => handleSelectChange(e, "marca")}
            >
              <option value="">Todas las marcas</option>
              {marcasDisponibles.map((marca) => (
                <option key={marca} value={marca}>
                  {marca.charAt(0) + marca.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-section">
            <h4 className="filter-subtitle">Año</h4>
            <select
              className="filter-select"
              onChange={(e) => handleSelectChange(e, "anio")}
            >
              <option value="">Cualquier año</option>
              {["2024", "2023", "2022", "2021", "2020"].map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-section">
            <h4 className="filter-subtitle">Combustible</h4>
            <div className="options-list">
              {["Gasolina", "Diésel", "Híbrido"].map((fuel) => (
                <label key={fuel} className="filter-label">
                  <input
                    type="checkbox"
                    value={fuel}
                    className="native-input"
                    onChange={(e) => handleCheckboxChange(e, "combustible")}
                  />
                  {fuel}
                </label>
              ))}
            </div>
          </div>

          <hr className="filter-hr" />

          <div className="filter-section">
            <h4 className="filter-subtitle">Transmisión</h4>
            <div className="options-list">
              {["Automática", "Mecánica"].map((trans) => (
                <label key={trans} className="filter-label">
                  <input
                    type="checkbox"
                    value={trans}
                    className="native-input"
                    onChange={(e) => handleCheckboxChange(e, "transmision")}
                  />
                  {trans}
                </label>
              ))}
            </div>
          </div>
        </aside>

        <div className="cards-grid">
          {autosVisibles.map((auto) => (
            <CarCard key={auto.id} {...auto} />
          ))}
          {autosVisibles.length === 0 && (
            <div className="no-results">
              <p>
                No hay vehiculos que coincidan con los filtros seleccionados.
              </p>
            </div>
          )}
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

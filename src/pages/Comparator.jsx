import { useEffect, useState } from "react";
import autosData from "../catalogo.json";
import "../styles/Comparator.css";
import { WineOff } from "lucide-react";

export default function Comparator() {
  const [selectedIds, setSelectedIds] = useState([]);

  const addCar = (e) => {
    const id = parseInt(e.target.value);
    if (id && selectedIds.length < 3 && !selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }
    e.target.value = "";
  };

  const removeCar = (id) => {
    setSelectedIds(selectedIds.filter((carId) => carId !== id));
  };

  const selectedCars = selectedIds.map((id) =>
    autosData.find((auto) => auto.id === id),
  );

  const comparisonData = [
    {
      category: "Motor y Rendimiento",
      specs: [
        { label: "Cilindrada", key: "displacement" },
        { label: "Transmisión", key: "transmision" },
        { label: "Combustible", key: "combustible" },
      ],
    },
    {
      category: "Dimensiones y Capacidad",
      specs: [
        { label: "Tracción", key: "traccion" },
        { label: "Puertas", key: "puertas" },
        { label: "Categoría", key: "categoria" },
      ],
    },
    {
      category: "Detalles Generales",
      specs: [
        { label: "Año", key: "anio" },
        { label: "Versión", key: "modeloSpec" },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="comparator-view-container">
      <div className="details-breadcrumbs">
        <span className="back-arrow">&larr;</span>
        <span className="breadcrumb-link">Vehículos</span>
        <span className="breadcrumb-separator">|</span>
        <span className="breadcrumb-current">Comparador</span>
      </div>

      <header className="header-comparador">
        <h1>
          Compara tus <span>Favoritos</span>
        </h1>
        <p>Selecciona hasta 3 vehículos para analizar sus especificaciones.</p>

        <div style={{ marginTop: "20px" }}>
          <select
            onChange={addCar}
            disabled={selectedIds.length >= 3}
            className="btn-action"
            style={{
              background: "#fff",
              color: "#1a1a1a",
              border: "1px solid #ccc",
            }}
          >
            <option value="">+ Añadir vehículo a comparar</option>
            {autosData
              .filter((auto) => !selectedIds.includes(auto.id))
              .map((auto) => (
                <option key={auto.id} value={auto.id}>
                  {auto.marca} {auto.modelo} ({auto.anio})
                </option>
              ))}
          </select>
        </div>
      </header>

      <div className="comparison-table">
        <div className="comparison-grid">
          <div className="col-header label-col">Especificaciones</div>

          {[0, 1, 2].map((index) => {
            const auto = selectedCars[index];
            return (
              <div key={index} className="col-header">
                {auto ? (
                  <>
                    <button
                      className="remove-btn"
                      onClick={() => removeCar(auto.id)}
                    >
                      ✕
                    </button>
                    <img
                      src={auto.imagen}
                      className="car-image"
                      alt={auto.modelo}
                    />
                    <h3 className="car-name">
                      {auto.marca} {auto.modelo}
                    </h3>
                    <span className="car-price">
                      ${auto.precioUsd.toLocaleString()}
                    </span>
                    <button className="btn-action">COTIZAR</button>
                  </>
                ) : (
                  <div
                    className="empty-slot"
                    style={{ padding: "40px 0", color: "#ccc" }}
                  >
                    <p style={{ fontSize: "12px", fontWeight: "700" }}>
                      ESPACIO VACÍO
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {comparisonData.map((section, sectionIdx) => (
            <div key={sectionIdx} className="category-wrapper-contents">
              <div className="category-row">{section.category}</div>
              {section.specs.map((spec, specIdx) => (
                <div key={specIdx} className="spec-row-contents">
                  <div className="row-label">{spec.label}</div>
                  {[0, 1, 2].map((carIdx) => (
                    <div key={carIdx} className="row-value">
                      {selectedCars[carIdx]
                        ? selectedCars[carIdx][spec.key] || "N/A"
                        : "—"}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

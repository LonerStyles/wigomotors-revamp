import "../styles/Comparator.css";

export default function Comparator() {
  const comparisonData = [
    {
      category: "Motor y Rendimiento",
      specs: [
        {
          label: "Tipo de Motor",
          values: ["2.5L Turbo Diesel", "2.0L Gasolina", "2.5L e-Skyactiv G"],
        },
        { label: "Potencia (HP)", values: ["188 HP", "154 HP", "187 HP"] },
        {
          label: "Transmisión",
          values: ["Automática 7 Vel.", "Manual 6 Vel.", "Automática 6 Vel."],
        },
      ],
    },
    {
      category: "Dimensiones y Capacidad",
      specs: [
        {
          label: "Tracción",
          values: ["4x4 con Selector", "2WD Delantera", "i-ACTIV AWD"],
        },
        {
          label: "Capacidad Tanque",
          values: ["21.1 Galones", "14.3 Galones", "15.3 Galones"],
        },
        { label: "Pasajeros", values: ["5 Adultos", "5 Adultos", "5 Adultos"] },
      ],
    },
    {
      category: "Seguridad y Tecnología",
      specs: [
        {
          label: "Airbags",
          values: [
            "6 (Frontal/Lat/Cort)",
            "6 (Frontal/Lat/Cort)",
            "7 (Incluye Rodilla)",
          ],
        },
        {
          label: "Pantalla Info.",
          values: [
            '8" con Apple CarPlay',
            '12" Panorámica',
            '10.25" Mazda Connect',
          ],
        },
        {
          label: "Cámaras",
          values: ["360° Monitor", "Retroceso HD", "360° View Monitor"],
        },
      ],
    },
  ];

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
        <p>
          Analiza las especificaciones técnicas lado a lado y toma la mejor
          decisión.
        </p>
      </header>

      <div className="comparison-table">
        <div className="comparison-grid">
          <div className="col-header label-col">Especificaciones</div>

          <div className="col-header">
            <button className="remove-btn">✕</button>
            <img
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=300"
              className="car-image"
              alt="Nissan"
            />
            <h3 className="car-name">Nissan Frontier</h3>
            <span className="car-price">$38,990</span>
            <button className="btn-action">COTIZAR</button>
          </div>

          <div className="col-header">
            <button className="remove-btn">✕</button>
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=300"
              className="car-image"
              alt="Kia"
            />
            <h3 className="car-name">Kia Sportage</h3>
            <span className="car-price">$29,450</span>
            <button className="btn-action">COTIZAR</button>
          </div>

          <div className="col-header">
            <button className="remove-btn">✕</button>
            <img
              src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=300"
              className="car-image"
              alt="Mazda"
            />
            <h3 className="car-name">Mazda CX-5</h3>
            <span className="car-price">$34,200</span>
            <button className="btn-action">COTIZAR</button>
          </div>

          {comparisonData.map((section, sectionIdx) => (
            <div key={sectionIdx} className="category-wrapper-contents">
              <div className="category-row">{section.category}</div>
              {section.specs.map((spec, specIdx) => (
                <div key={specIdx} className="spec-row-contents">
                  <div className="row-label">{spec.label}</div>
                  {spec.values.map((val, valIdx) => (
                    <div key={valIdx} className="row-value">
                      {val}
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

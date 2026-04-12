import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import autosData from "../catalogo.json";
import ServiceCard from "../components/ServiceCard";
import favoriteIcon2 from "../assets/favoriteIcon2.svg";
import shareIcon from "../assets/shareIcon.svg";
import yearIcon from "../assets/year.svg";
import fuelIcon from "../assets/fuel.svg";
import displacementIcon from "../assets/displacement.svg";
import transmissionIcon from "../assets/transmission.svg";
import mileageIcon from "../assets/mileage.svg";
import doorsIcon from "../assets/doors.svg";
import wspIcon from "../assets/wsp.svg";
import financiamientoIcon from "../assets/WI_-_Opciones_de_financiamiento2.svg";
import partePagoIcon from "../assets/WI_-_Compramos_tu_auto2.svg";
import segurosIcon from "../assets/WI_-_Seguros_automotriz2.svg";
import mantenimientosIcon from "../assets/WI_-_Mantenimiento_prepagado2.svg";
import probadosIcon from "../assets/WI_-_Servicio_tecnico2.svg";
import accesoriosIcon from "../assets/WI_-_Repuestos_y_accesorios2.svg";
import "../styles/Details.css";

export default function Details() {
  const { id } = useParams();
  const auto = autosData.find((a) => a.id === parseInt(id));

  const [cuotaInicial, setCuotaInicial] = useState(() => {
    if (!auto) return 5000;
    return Math.round(auto.precioSoles * 0.2);
  });

  const [numCuotas, setNumCuotas] = useState(36);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!auto) return <div className="carNotFound">Vehículo no encontrado</div>;

  const calcularCuotaMensual = () => {
    const saldo = auto.precioSoles - cuotaInicial;
    if (saldo <= 0) return 0;
    const tasaMensual = 0.15 / 12;
    const cuota =
      (saldo * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -numCuotas));
    return Math.round(cuota);
  };

  const serviciosData = [
    {
      icon: financiamientoIcon,
      title: "Financiamiento",
      description:
        "Te ofrecemos las mejores opciones para financiar tu nuevo vehículo.",
    },
    {
      icon: partePagoIcon,
      title: "Tu vehículo en parte de pago",
      description:
        "Olvídate del trámite de vender tu auto, lo abonamos a tu compra.",
    },
    {
      icon: segurosIcon,
      title: "Seguros",
      description:
        "Te asesoramos para elegir el seguro que mejor se ajuste a tus necesidades.",
    },
    {
      icon: mantenimientosIcon,
      title: "Mantenimientos",
      description: "Te acompañamos con los mantenimientos de tu auto.",
    },
    {
      icon: probadosIcon,
      title: "Vehículos probados",
      description:
        "Te ofrecemos vehículos probados y revisados por expertos automotrices.",
    },
    {
      icon: accesoriosIcon,
      title: "Accesorios",
      description: "Todo lo que necesitas para complementar tu vehículo.",
    },
  ];

  return (
    <div className="details-view-container">
      <div className="details-breadcrumbs">
        <span className="back-arrow">&larr;</span>
        <span className="breadcrumb-link">Vehículos</span>
        <span className="breadcrumb-separator">|</span>
        <span className="breadcrumb-current">
          {auto.marca} {auto.modelo}
        </span>
      </div>

      <h1 className="details-main-title">
        {auto.marca} {auto.modelo} Wigo Motors
      </h1>

      <div className="details-main-layout">
        <div className="details-gallery-section">
          <div className="details-main-img-wrapper">
            <img
              src={auto.imagen}
              alt={auto.modelo}
              className="details-main-img"
            />
          </div>
          <div className="details-thumbnails-row">
            <div className="thumb-item active">
              <img src={auto.imagen} alt="1" />
            </div>
            <div className="thumb-item">
              <img src={auto.imagen} alt="2" />
            </div>
            <div className="thumb-item">
              <img src={auto.imagen} alt="3" />
            </div>
            <div className="thumb-item">
              <img src={auto.imagen} alt="4" />
            </div>
          </div>
        </div>

        <div className="details-purchase-box">
          <div className="purchase-header">
            <span className="car-segment">{auto.categoria}</span>
            <div className="purchase-actions-icons">
              <button className="icon-action-btn">
                <img src={favoriteIcon2} alt="icon" />
              </button>
              <button className="icon-action-btn">
                <img src={shareIcon} alt="icon" />
              </button>
            </div>
          </div>

          <h2 className="purchase-car-name">
            {auto.marca} <strong>{auto.modelo}</strong>
          </h2>
          <p className="purchase-car-version">{auto.modeloSpec}</p>

          <div className="purchase-pricing">
            <span className="price-usd">
              USD $ {auto.precioUsd.toLocaleString("en-US")}
            </span>
            <span className="price-divider">|</span>
            <span className="price-pen">
              PEN S/. {auto.precioSoles.toLocaleString("en-US")}
            </span>
          </div>

          <div className="purchase-specs-grid">
            <div className="spec-box">
              <img src={yearIcon} alt="icon" />
              <span className="spec-label">{auto.anio}</span>
            </div>
            <div className="spec-box">
              <img src={fuelIcon} alt="icon" />
              <span className="spec-label">{auto.combustible}</span>
            </div>
            <div className="spec-box">
              <img src={displacementIcon} alt="icon" />
              <span className="spec-label">{auto.displacement}</span>
            </div>
            <div className="spec-box">
              <img src={mileageIcon} alt="icon" />
              <span className="spec-label">{auto.traccion}</span>
            </div>
            <div className="spec-box">
              <img src={transmissionIcon} alt="icon" />
              <span className="spec-label">{auto.transmision}</span>
            </div>
            <div className="spec-box">
              <img src={doorsIcon} alt="icon" />
              <span className="spec-label">
                {auto.puertas.toString()} PUERTAS
              </span>
            </div>
          </div>

          <Link to="/contacto">
            <button className="btn-action-submit btn-red">COTIZAR</button>
          </Link>
          <Link to="/test-drive">
            <button className="btn-action-submit btn-dark">
              SOLICITAR TEST DRIVE
            </button>
          </Link>
          <button className="btn-action-submit btn-green">
            <img src={wspIcon} alt="wspIcon" />
            WHATSAPP
          </button>
        </div>
      </div>

      <div className="calculator-section-box">
        <h3 className="calculator-title">Calculadora Financiamiento</h3>
        <div className="calculator-form-row">
          <div className="calc-price-display">
            USD {auto.precioUsd.toLocaleString("en-US")} | PEN{" "}
            {auto.precioSoles.toLocaleString("en-US")}
          </div>
          <div className="calc-input-group">
            <label>Inicial (S/.)</label>
            <input
              type="number"
              value={cuotaInicial}
              onChange={(e) => setCuotaInicial(Number(e.target.value))}
            />
          </div>
          <div className="calc-label-symbol">+</div>
          <div className="calc-input-group">
            <label>Cuotas</label>
            <select
              value={numCuotas}
              onChange={(e) => setNumCuotas(Number(e.target.value))}
            >
              {[12, 24, 36, 48].map((n) => (
                <option key={n} value={n}>
                  {n} meses
                </option>
              ))}
            </select>
          </div>
          <div className="calc-label-symbol">=</div>
          <div className="calc-result-display">
            <div>
              Cuota estimada:{" "}
              <strong>S/.{calcularCuotaMensual().toLocaleString()}</strong>
            </div>
            <div className="calc-result-detail">Incluye 15% de interes</div>
          </div>
        </div>
      </div>

      <div className="benefits-section-box">
        <h3 className="benefits-title">
          Todo lo que necesitas en un solo lugar
        </h3>
        <div className="benefits-grid">
          {serviciosData.map((servicio, index) => (
            <ServiceCard
              key={index}
              icon={servicio.icon}
              title={servicio.title}
              description={servicio.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

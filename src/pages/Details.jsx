import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import carImg from "../assets/carImg.png";
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
  const precioAutoUSD = 15900;
  const precioAutoPEN = 54060;

  const [cuotaInicial, setCuotaInicial] = useState(5000);
  const [numCuotas, setNumCuotas] = useState(36);

  const calcularCuotaMensual = () => {
    const saldoAFinanciar = precioAutoPEN - cuotaInicial;
    if (saldoAFinanciar <= 0) return 0;

    const tasaMensual = 0.15 / 12;
    const cuota =
      (saldoAFinanciar * tasaMensual) /
      (1 - Math.pow(1 + tasaMensual, -numCuotas));
    return Math.round(cuota);
  };

  const cuotaMensualCalculada = calcularCuotaMensual();

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
        <span className="breadcrumb-current">MG GT</span>
      </div>

      <h1 className="details-main-title">MG GT Wigo Motors</h1>

      <div className="details-main-layout">
        <div className="details-gallery-section">
          <div className="details-main-img-wrapper">
            <img
              src={carImg}
              alt="Auto principal"
              className="details-main-img"
            />
          </div>
          <div className="details-thumbnails-row">
            <div className="thumb-item active">
              <img src={carImg} alt="Vista 1" />
            </div>
            <div className="thumb-item">
              <img src={carImg} alt="Vista 2" />
            </div>
            <div className="thumb-item">
              <img src={carImg} alt="Vista 3" />
            </div>
            <div className="thumb-item">
              <img src={carImg} alt="Vista 4" />
            </div>
          </div>
        </div>

        <div className="details-purchase-box">
          <div className="purchase-header">
            <span className="car-segment">SEDAN</span>
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
            MG <strong>GT</strong>
          </h2>
          <p className="purchase-car-version">MG GT 1.5L CVT SPORT</p>

          <div className="purchase-pricing">
            <span className="price-usd">
              USD ${precioAutoUSD.toLocaleString()}
            </span>
            <span className="price-divider">|</span>
            <span className="price-pen">
              S/.{precioAutoPEN.toLocaleString()}
            </span>
          </div>

          <div className="purchase-specs-grid">
            <div className="spec-box">
              <img src={yearIcon} alt="icon" />
              <span className="spec-label">2023</span>
            </div>
            <div className="spec-box">
              <img src={fuelIcon} alt="icon" />
              <span className="spec-label">GASOLINA</span>
            </div>
            <div className="spec-box">
              <img src={displacementIcon} alt="icon" />
              <span className="spec-label">1.498 CC</span>
            </div>
            <div className="spec-box">
              <img src={mileageIcon} alt="icon" />
              <span className="spec-label">FWD</span>
            </div>
            <div className="spec-box">
              <img src={transmissionIcon} alt="icon" />
              <span className="spec-label">AUTOMÁTICA</span>
            </div>
            <div className="spec-box">
              <img src={doorsIcon} alt="icon" />
              <span className="spec-label">4 PUERTAS</span>
            </div>
          </div>

          <button className="btn-action-submit btn-red">COTIZAR</button>
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
            USD ${precioAutoUSD.toLocaleString()} | S/.
            {precioAutoPEN.toLocaleString()}
          </div>

          <span className="calc-math-symbol">X</span>

          <div className="calc-input-group">
            <label>Inicial (S/.)</label>
            <input
              type="number"
              value={cuotaInicial}
              onChange={(e) => setCuotaInicial(Number(e.target.value))}
              max={precioAutoPEN}
            />
          </div>

          <div className="calc-input-group">
            <label>N° Cuotas (Meses)</label>
            <select
              value={numCuotas}
              onChange={(e) => setNumCuotas(Number(e.target.value))}
            >
              <option value={12}>12 meses</option>
              <option value={24}>24 meses</option>
              <option value={36}>36 meses</option>
              <option value={48}>48 meses</option>
            </select>
          </div>

          <span className="calc-math-symbol">=</span>

          <div className="calc-result-display">
            S/.{cuotaInicial.toLocaleString()} INICIAL |{" "}
            <strong>S/.{cuotaMensualCalculada.toLocaleString()} AL MES</strong>
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

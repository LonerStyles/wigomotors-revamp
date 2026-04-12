import { Link } from "react-router-dom";
import favoriteIcon2 from "../assets/favoriteIcon2.svg";
import shareIcon from "../assets/shareIcon.svg";
import "../styles/CarCard.css";

export default function CarCard({
  id,
  imagen,
  categoria = "SEDAN",
  marca = "MG",
  modelo = "GT",
  precioUsd = "$15,900",
  precioSoles = "S/.54,060",
  anio = "2023",
  transmision = "Automático",
  combustible = "Gasolina",
}) {
  return (
    <div className="car-card">
      <div className="car-image-container">
        <Link to={`/detalle/${id}`}>
          <img className="car-image" alt={`${marca} ${modelo}`} src={imagen} />
        </Link>
      </div>

      <div className="car-card-content">
        <div className="car-header">
          <span className="car-type">{categoria}</span>
          <div className="car-actions">
            <img src={favoriteIcon2} alt="Favorite" />
            <img src={shareIcon} alt="Share" />
          </div>
        </div>

        <h2 className="car-title">
          <span className="brand">{marca} </span>
          <span className="model">{modelo}</span>
        </h2>

        <span className="price-label">Desde</span>

        <div className="car-price-row">
          <span className="currency">USD</span>
          <span className="amount">
            {Number(precioUsd).toLocaleString("en-US")}
          </span>
          <span className="separator">|</span>
          <span className="currency">PEN</span>
          <span className="amount">
            {Number(precioSoles).toLocaleString("en-US")}
          </span>
        </div>

        <div className="car-specs">
          <span>{anio}</span>
          <span className="separator">|</span>
          <span>{transmision}</span>
          <span className="separator">|</span>
          <span>{combustible}</span>
        </div>

        <Link to={`/detalle/${id}`}>
          <button className="car-btn-cotizar">COTIZAR</button>
        </Link>
      </div>
    </div>
  );
}

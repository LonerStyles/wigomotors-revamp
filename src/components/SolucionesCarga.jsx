import { Link } from "react-router-dom";
import trucksBg from "../assets/trucks-bg.png";
import "../styles/SolucionesCarga.css";

export default function SolucionesCarga() {
  return (
    <div className="cargo-section">
      <div className="cargo-image-col">
        <img
          src={trucksBg}
          alt="Línea de Camiones Dongfeng"
          className="cargo-bg"
        />
      </div>

      <div className="cargo-content-col">
        <h2 className="content-title">Soluciones de Carga</h2>

        <p className="content-text">
          Desde constructores hasta emprendedores de alto rendimiento. Tenemos
          el camión perfecto para tu negocio.
        </p>

        <Link to="/vehiculos?categoria=pesados">
          <button className="content-btn">Ver Línea Pesada</button>
        </Link>
      </div>
    </div>
  );
}

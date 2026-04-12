import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import autosData from "../catalogo.json";
import "../styles/Destacados.css";

export default function Destacados() {
  const autosDestacados = autosData.slice(0, 3);
  
  return (
    <div className="destacados-section">
      <div className="destacados-header">
        <div className="title-group">
          <h2 className="main-title">Modelos Destacados</h2>
          <p className="subtitle">
            Explora las unidades más buscadas de la semana.
          </p>
        </div>

        <Link to="/vehiculos?categoria=pasajeros">
          <button className="btn-ver-todos">
            <span>Ver Todos →</span>
          </button>
        </Link>
      </div>

      <div className="card-container">
        {autosDestacados.map((auto) => (
          <CarCard key={auto.id} {...auto}/>
        ))}
      </div>
    </div>
  );
}

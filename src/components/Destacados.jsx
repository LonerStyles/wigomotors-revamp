import CarCard from "../components/CarCard";
import carImg from "../assets/carImg.png";
import carImg2 from "../assets/carImg2.png";
import carImg3 from "../assets/carImg3.png";
import "../styles/Destacados.css";

export default function Destacados() {
  return (
    <div className="destacados-section">
      <div className="destacados-header">
        <div className="title-group">
          <h2 className="main-title">Modelos Destacados</h2>
          <p className="subtitle">
            Explora las unidades más buscadas de la semana.
          </p>
        </div>

        <button className="btn-ver-todos">
          <span>Ver Todos →</span>
        </button>
      </div>

      <div className="card-container">
        <CarCard
          imagen={carImg}
          categoria="SEDAN"
          marca="MG"
          modelo="GT"
          precioUsd="$15,900"
          precioSoles="S/.54,060"
          anio="2023"
          transmision="Automático"
          combustible="Gasolina"
        />
        <CarCard
          imagen={carImg2}
          categoria="SUV"
          marca="Geely"
          modelo="Coolray"
          precioUsd="$19,900"
          precioSoles="S/.67,660"
          anio="2023"
          transmision="Automático"
          combustible="Gasolina"
        />
        <CarCard
          imagen={carImg3}
          categoria="SUV"
          marca="Jeep"
          modelo="Cherokee"
          precioUsd="$23,500"
          precioSoles="S/.79,900"
          anio="2016"
          transmision="Automático"
          combustible="Gasolina"
        />
      </div>
    </div>
  );
}

import CarCard from "../components/CarCard";
import "../styles/Favoritos.css";
import carImg from "../assets/carImg.png";
import kiaSonet from "../assets/kia-sonet.webp";
import geelyCoolray from "../assets/geely-coolray.webp";

export default function Favoritos() {
  const misFavoritos = [
    {
      id: 1,
      imagen: carImg,
      categoria: "SEDAN",
      marca: "MG",
      modelo: "GT",
      precioUsd: "$15,900",
      precioSoles: "S/.54,060",
      anio: "2023",
      transmision: "Automático",
      combustible: "Gasolina",
    },
    {
      id: 2,
      imagen: kiaSonet,
      categoria: "SUV",
      marca: "KIA",
      modelo: "Sonet",
      precioUsd: "$17,390",
      precioSoles: "S/.59,126",
      anio: "2024",
      transmision: "Mecánico",
      combustible: "Gasolina",
    },
    {
      id: 3,
      imagen: geelyCoolray,
      categoria: "SUV",
      marca: "GEELY",
      modelo: "Coolray",
      precioUsd: "$19,900",
      precioSoles: "S/.67,660",
      anio: "2023",
      transmision: "Automático",
      combustible: "Gasolina",
    },
  ];

  return (
    <div className="favoritos-container">
      <div className="fav-breadcrumbs">
        <span className="back-arrow">&larr;</span>
        <span className="breadcrumb-link">Inicio</span>
        <span className="breadcrumb-separator">|</span>
        <span className="breadcrumb-current">Favoritos</span>
      </div>

      <h1 className="fav-title">Tus Favoritos</h1>

      <div className="fav-count-section">
        <span className="fav-count-text">3 Favoritos</span>
        <div className="fav-divider"></div>
      </div>

      <div className="fav-grid">
        {misFavoritos.map((auto) => (
          <CarCard
            key={auto.id}
            imagen={auto.imagen}
            categoria={auto.categoria}
            marca={auto.marca}
            modelo={auto.modelo}
            precioUsd={auto.precioUsd}
            precioSoles={auto.precioSoles}
            anio={auto.anio}
            transmision={auto.transmision}
            combustible={auto.combustible}
          />
        ))}
      </div>
    </div>
  );
}

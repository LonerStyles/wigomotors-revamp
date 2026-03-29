import { ChevronLeft, ChevronRight } from "lucide-react";
import sliderBg from "../assets/slider-bg.png";
import "../styles/SliderPromo.css";

export default function SliderPromo() {
  return (
    <div className="slider-container">
      <img
        className="slider-bg"
        src={sliderBg}
        alt="Gran Cierra Puertas de Temporada"
      />

      <div className="slider-overlay"></div>

      <button className="slider-arrow arrow-left" aria-label="Anterior">
        <ChevronLeft size={24} color="#ffffff" />
      </button>

      <div className="slider-content">
        <span className="slider-brand">DONGFENG MOTOR PERÚ</span>

        <h1 className="slider-title">¡Gran Cierra Puertas de Temporada!</h1>

        <p className="slider-subtitle">
          Participa de los juegos y gana premios sorpresa por tu reserva o
          compra.
        </p>

        <button className="slider-btn">Obtener Bono</button>
      </div>

      <button className="slider-arrow arrow-right" aria-label="Siguiente">
        <ChevronRight size={24} color="#ffffff" />
      </button>

      <div className="slider-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

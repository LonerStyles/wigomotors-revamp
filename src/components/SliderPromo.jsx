import { Link } from "react-router-dom";
import { useState, useEffect ,useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sliderBg from "../assets/slider-bg.png";
import sliderBg2 from "../assets/sliderBg2.webp";
import sliderBg3 from "../assets/sliderBg3.webp";
import "../styles/SliderPromo.css";

const slides = [
  {
    id: 1,
    image: sliderBg,
    brand: "DONFENG MOTOR PERÚ",
    title: "¡Gran cierra Puertas de Temporada!",
    subtitle: "Participa de los juegos y gana premios sorpresa por tu reserva o compra.",
    link: "/catalogo"
  },
  {
    id: 2,
    image: sliderBg2,
    brand: "OFERTAS EXCLUSIVAS",
    title: "Renueva tu camioneta hoy",
    subtitle: "Bonos de hasta $3,000 en modelos seleccionados.",
    link: "/catalogo"
  },
  {
    id: 3,
    image: sliderBg3,
    brand: "SERVICIO TÉCNICO",
    title: "Mantenimiento Preventivo",
    subtitle: "Agenda tu cita y recibe un diagnóstico gratuito.",
    link: "/servicios"
  }
]

export default function SliderPromo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  });

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  const goToSlide = (index) =>  {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="slider-container">
      <img
        className="slider-bg"
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        key={currentIndex}
      />

      <div className="slider-overlay"></div>

      <button className="slider-arrow arrow-left" onClick={prevSlide} aria-label="Anterior">
        <ChevronLeft size={24} color="#ffffff" />
      </button>

      <div className="slider-content">
        <span className="slider-brand">{slides[currentIndex].brand}</span>        
        <h1 className="slider-title">{slides[currentIndex].title}</h1>
        <p className="slider-subtitle">{slides[currentIndex].subtitle}</p>

        <Link to={slides[currentIndex].link}>
          <button className="slider-btn">Obtener Bono</button>
        </Link>
      </div>

      <button className="slider-arrow arrow-right" onClick={nextSlide} aria-label="Siguiente">
        <ChevronRight size={24} color="#ffffff" />
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sliderBg from "../assets/sliderBg.png";
import sliderBg2 from "../assets/sliderBg2.png";
import sliderBg3 from "../assets/sliderBg3.png";
import "../styles/SliderPromo.css";

const slides = [
  {
    id: 1,
    image: sliderBg3,
    brand: "OMODA | JAECOO",
    title: "Nuevos modelos se unen a la familia",
    subtitle: "WIGO MOTORS",
    link: "/vehiculos?categoria=pasajeros",
  },
  {
    id: 2,
    image: sliderBg2,
    brand: "WIGO MOTORS",
    title: "Nissan Kicks nuevo modelo",
    subtitle: "APTITUDE TO DISRUPT",
    link: "/vehiculos?categoria=pasajeros",
  },
  {
    id: 3,
    image: sliderBg,
    brand: "PEUGEOT",
    title: "Gran venta varios modelos",
    subtitle: "Sin cuota inicial, accede a garantias y mantenimiento incluidos",
    link: "/vehiculos?categoria=pasajeros",
  },
];

export default function SliderPromo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goToSlide = (index) => {
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

      <button
        className="slider-arrow arrow-left"
        onClick={prevSlide}
        aria-label="Anterior"
      >
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

      <button
        className="slider-arrow arrow-right"
        onClick={nextSlide}
        aria-label="Siguiente"
      >
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

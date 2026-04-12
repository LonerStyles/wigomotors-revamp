import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Banner from "../components/Banner";
import AdCards from "../components/AdCards";
import Brands from "../components/Brands";
import Destacados from "../components/Destacados";
import SliderPromo from "../components/SliderPromo";
import SolucionesCarga from "../components/SolucionesCarga";
import ReviewsWigo from "../components/ReviewsWigo";
import NuestrosServicios from "../components/NuestrosServicios";
import "../styles/Home.css";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#servicios") {
      const element = document.getElementById("servicios");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main>
      <Banner />
      <AdCards />
      <Brands />
      <Destacados />
      <SliderPromo />
      <SolucionesCarga />
      <ReviewsWigo />
      <NuestrosServicios id="services-section" />
    </main>
  );
}

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

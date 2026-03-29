import { AdCard } from "./AdCard";
import "../styles/AdCard.css";

export default function AdCards() {
  const adCard1 = "/src/assets/adCard1.png";
  const adCard2 = "/src/assets/adCard2.png";
  const adCard3 = "/src/assets/adCard3.png";
  return (
    <section className="AdCards">
      <AdCard
        image={adCard1}
        title={"Aprovecha Hoy"}
        subtitle={"El momento de estrenar Hyundai"}
      />
      <AdCard
        image={adCard2}
        title={"¡Obten tu nueva Geely!"}
        subtitle={"Conviértete en el dueño de la ciudad con una Geely"}
      />
      <AdCard
        image={adCard3}
        title={"¿Qué esperas para dar el siguiente paso?"}
        subtitle={"Aprovecha todos los beneficios que tenemos"}
      />
    </section>
  );
}

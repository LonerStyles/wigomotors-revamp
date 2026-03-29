import chevyLogo from "../assets/chevy-logo.png";
import hyundaiLogo from "../assets/hyundai-logo.png";
import kiaLogo from "../assets/kia-logo.png";
import mazdaLogo from "../assets/mazda-logo.png";
import nissanLogo from "../assets/nissan-logo.png";
import peugeotLogo from "../assets/peugeot-logo.png";
import "../styles/Brands.css";

export default function Brands() {
  return (
    <div className="brands">
      <div className="text-wrapper">CONCESIONARIO OFICIAL DE</div>

      <div className="brands-logos">
        <div className="KIA">
          <img className="img" alt="Kia logo" src={kiaLogo} />

          <div className="div">KIA</div>
        </div>

        <div className="div-2">
          <img className="nissan-logo" alt="Nissan logo" src={nissanLogo} />

          <div className="div">NISSAN</div>
        </div>

        <div className="div-2">
          <img className="mazda-logo" alt="Mazda logo" src={mazdaLogo} />

          <div className="div">MAZDA</div>
        </div>

        <div className="HYUNDAI">
          <img className="hyundai-logo" alt="Hyundai logo" src={hyundaiLogo} />

          <div className="div">HYUNDAI</div>
        </div>

        <div className="CHEVROLET">
          <img className="img" alt="Chevy logo" src={chevyLogo} />

          <div className="div">CHEVROLET</div>
        </div>

        <div className="PEUGEOT">
          <img className="peugeot-logo" alt="Peugeot logo" src={peugeotLogo} />

          <div className="div">PEUGEOT</div>
        </div>
      </div>
    </div>
  );
}

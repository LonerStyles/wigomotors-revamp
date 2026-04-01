import { Link } from "react-router-dom";
import "../styles/AdCard.css";

export const AdCard = ({ image, title, subtitle }) => {
  return (
    <div className="ad-card">
      <div className="image-container">
        <img className="image" alt={title} src={image} />
      </div>

      <div className="content-frame">
        <div className="title">{title}</div>
        <p className="subtitle">{subtitle}</p>

        <Link to="contacto" >
          <button className="btn-cotizar">
            <span className="btn-text">COTIZAR</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

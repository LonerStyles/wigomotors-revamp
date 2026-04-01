import { Link } from "react-router-dom";
import "../styles/ServiceBtn.css";

export const ServiceBtn = ({ iconName, label }) => {
  const iconSrc = new URL(`../assets/${iconName}`, import.meta.url).href;

  return (
    <Link className="service-btn" to="/contacto">
        <div className="service-icon-container">
          <img src={iconSrc} alt={label} className="service-icon" />
        </div>
        <span className="service-label">{label}</span>
    </Link>
  );
};

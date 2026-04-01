import { NavLink } from "react-router-dom";
import "../styles/Header.css";

export default function Header({
  className = "",
  logoWigo = "Logo_Wigo.svg",
  locationIcon = "locationIcon.png",
  favoriteIcon = "favoriteIcon.png",
  usericon = "usericon-1.png",
}) {
  return (
    <header className={`main-header ${className}`}>
      <div className="header-container">
        <div className="header-logo-wrapper">
          <NavLink to="/">
            <img className="header-logo-img" alt="Logo Wigo" src={logoWigo} />
          </NavLink>
        </div>

        <nav className="header-nav">
          <NavLink to="/vehiculos" className="nav-link">
            NUEVOS
          </NavLink>
          <NavLink to="/vehiculos" className="nav-link">
            SEMINUEVOS
          </NavLink>
          <NavLink to="/comparar" className="nav-link">
            COMPARAR
          </NavLink>
          <NavLink to="/contacto" className="nav-link">
            SERVICIOS
          </NavLink>
          <NavLink to="/contacto" className="nav-link">
            VENDE TU AUTO
          </NavLink>
        </nav>

        <div className="header-actions">
          <button className="action-btn" aria-label="Ubicación">
            <img src={locationIcon} alt="Icono Ubicación" />
          </button>
          <NavLink to="/favoritos">
            <button className="action-btn" aria-label="Favoritos">
              <img src={favoriteIcon} alt="Icono Favoritos" />
            </button>
          </NavLink>
          <button className="action-btn" aria-label="Usuario">
            <img src={usericon} alt="Icono Usuario" />
          </button>
        </div>
      </div>
    </header>
  );
}

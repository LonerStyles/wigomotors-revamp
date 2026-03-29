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
          <a href="#">
            <img className="header-logo-img" alt="Logo Wigo" src={logoWigo} />
          </a>
        </div>

        <nav className="header-nav">
          <a href="#nuevos" className="nav-link">
            NUEVOS
          </a>
          <a href="#seminuevos" className="nav-link">
            SEMINUEVOS
          </a>
          <a href="#seminuevos" className="nav-link">
            CATÁLOGO
          </a>
          <a href="#servicies-section" className="nav-link">
            SERVICIOS
          </a>
          <a href="#vende-tu-auto" className="nav-link">
            VENDE TU AUTO
          </a>
        </nav>

        <div className="header-actions">
          <button className="action-btn" aria-label="Ubicación">
            <img src={locationIcon} alt="Icono Ubicación" />
          </button>
          <button className="action-btn" aria-label="Favoritos">
            <img src={favoriteIcon} alt="Icono Favoritos" />
          </button>
          <button className="action-btn" aria-label="Usuario">
            <img src={usericon} alt="Icono Usuario" />
          </button>
        </div>
      </div>
    </header>
  );
}

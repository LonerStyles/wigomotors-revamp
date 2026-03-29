import "../styles/ServiceBtn.css";

export const ServiceBtn = ({ iconName, label }) => {  
  const iconSrc = new URL(`../assets/${iconName}`, import.meta.url).href;

  return (
    <button className="service-btn">
      <div className="service-icon-container">
        <img src={iconSrc} alt={label} className="service-icon" />
      </div>
      <span className="service-label">{label}</span>
    </button>
  );
};
import "../styles/ServiceCard.css";

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card-item">
      <div className="service-icon-wrapper">        
        <img src={icon} alt={title} className="service-img-icon" />
      </div>
      <div className="service-content-wrapper">
        <h4 className="service-card-title">{title}</h4>
        <p className="service-card-description">{description}</p>
      </div>
    </div>
  );
}

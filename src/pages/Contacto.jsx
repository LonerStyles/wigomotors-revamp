import { useLocation } from "react-router-dom";
import "../styles/Contacto.css";

const PANELES_CONFIG = {
  cotizar: {
    titulo: "Cotiza tu Próximo", highlight: "Auto",
    descripcion: "Déjanos tus datos y un asesor especializado te contactará en menos de 15 minutos.",
    beneficios: ["Bonos exclusivos de internet", "Tasas preferenciales", "Entrega inmediata"],
    bgImage: null
  },
  servicio: {
    titulo: "Agenda tu", highlight: "Servicio",
    descripcion: "Mantén tu vehículo en óptimas condiciones con nuestro servicio técnico certificado.",
    beneficios: ["Técnicos certificados", "Repuestos originales", "Lavado de cortesía"],
    bgImage: "url('/src/assets/serviceContact-bg.png')"
  },
  vende: {
    titulo: "Vende tu", highlight: "Auto",
    descripcion: "Tasamos tu vehículo de forma gratuita y te ofrecemos el mejor precio de forma segura.",
    beneficios: ["Tasación en 30 min", "Pago inmediato", "Trámites incluidos"],
    bgImage: "url('/src/assets/vende-bg.jpg')" 
  },
  testdrive: {
    titulo: "Solicita tu", highlight: "Test Drive",
    descripcion: "Vive la experiencia de conducir el auto de tus sueños antes de tomar una decisión.",
    beneficios: ["Prueba sin compromiso", "Asesoría en ruta", "Horarios flexibles"],
    bgImage: "url('/src/assets/testdrive-bg.jpg')"
  }
};

export default function Contacto() {
  const location = useLocation();
  const motivoActual = location.state?.motivo || "cotizar";
  const config = PANELES_CONFIG[motivoActual] || PANELES_CONFIG.cotizar;

  return (
    <div className="contacto-view-bg">
      <div className="contacto-container">
        <div className="details-breadcrumbs">
          <span className="back-arrow">&larr;</span>
          <span className="breadcrumb-link">Vehículos</span>
          <span className="breadcrumb-separator">|</span>
          <span className="breadcrumb-current">Contacto</span>
        </div>

        <header className="contacto-header-main">
          <h1>Nosotros te contactamos</h1>
          <p>
            Completa tus datos en el siguiente formulario y te contactaremos para 
            resolver tus dudas, cotizar vehículos y ayudarte en lo que necesites.
          </p>
        </header>

        <div className="form-container-card">
          <div className="form-info-panel" style={{ backgroundImage: config.bgImage }}>
            {config.bgImage && <div className="panel-overlay"></div>}
            <div className="panel-content-wrapper">
              <h2 className="panel-title">
                {config.titulo} <span className="highlight">{config.highlight}</span>
              </h2>
              <p className="panel-description">{config.descripcion}</p>
              {config.beneficios.map((item, idx) => (
                <div className="benefit-item" key={idx}>
                  <span className="benefit-icon">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="form-content-area">
            <header className="form-content-header">
              <h3>Datos Personales</h3>
              <p>Por favor completa los siguientes campos.</p>
            </header>

            <form className="form-input-grid">
              <div className="input-field-group">
                <label>Nombres</label>
                <input type="text" placeholder="Tus nombres" required />
              </div>

              <div className="input-field-group">
                <label>Apellidos</label>
                <input type="text" placeholder="Tus apellidos" required />
              </div>

              <div className="input-field-group">
                <label>DNI/CE</label>
                <input type="text" placeholder="Número de documento" required />
              </div>

              <div className="input-field-group">
                <label>Número de Celular</label>
                <input type="tel" placeholder="Tu Número de celular" required />
              </div>

              <div className="input-field-group full-width">
                <label>Correo Electrónico</label>
                <input type="email" placeholder="correo@ejemplo.com" required />
              </div>

              <div className="input-field-group">
                <label>Marca de Interés</label>
                <select defaultValue="">
                  <option value="" disabled>Seleccionar marca</option>
                  <option>MG</option>
                  <option>KIA</option>
                  <option>NISSAN</option>
                </select>
              </div>

              <div className="input-field-group">
                <label>Modelo</label>
                <select defaultValue="">
                  <option value="" disabled>Seleccionar modelo</option>
                  <option>MG GT</option>
                  <option>Sonet</option>
                </select>
              </div>

              <div className="input-field-group full-width">
                <label>Sede Preferida</label>
                <select defaultValue="">
                  <option value="" disabled>Seleccionar sede</option>
                  <option>Sede Surquillo</option>
                  <option>Sede San Miguel</option>
                </select>
              </div>

              <div className="form-checkbox-group full-width">
                <label className="checkbox-control">
                  <input type="checkbox" required />
                  <span className="checkbox-text">
                    He leído y acepto la <u>Política de Privacidad</u>.
                  </span>
                </label>
                <label className="checkbox-control">
                  <input type="checkbox" />
                  <span className="checkbox-text">
                    Deseo recibir promociones y ofertas exclusivas de Wigo Motors.
                  </span>
                </label>
              </div>

              <button type="submit" className="btn-submit-contacto full-width">
                ENVIAR SOLICITUD
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
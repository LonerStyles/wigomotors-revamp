import "../styles/Contacto.css";

export default function Contacto() {
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
            Completa tus datos en el siguiente formulario y te contactaremos
            para resolver tus dudas, cotizar vehículos y ayudarte en lo que
            necesites.
          </p>
        </header>

        <div className="form-container-card">
          <div className="form-info-panel">
            <h2 className="panel-title">
              Cotiza tu Proximo <span className="highlight">Auto</span>
            </h2>
            <p className="panel-description">
              Déjanos tus datos y un asesor especializado te contactará en menos
              de 15 minutos.
            </p>

            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>Bonos exclusivos de internet</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>Aprobación de crédito inmediata</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>Tasación de tu auto actual</span>
            </div>
          </div>
          <div className="form-content-area">
            <div className="form-content-header">
              <h3>Datos Personales</h3>
              <p>Por favor completa los campos obligatorios (*)</p>
            </div>

            <form className="form-input-grid">
              <div className="input-field-group">
                <label>Nombres *</label>
                <input type="text" name="nombres" placeholder="Tu Nombre" />
              </div>

              <div className="input-field-group">
                <label>Apellidos *</label>
                <input
                  type="text"
                  name="apellidos"
                  placeholder="Tus Apellidos"
                />
              </div>

              <div className="input-field-group">
                <label>DNI / CE *</label>
                <input
                  type="text"
                  name="dni"
                  placeholder="Documento de identidad"
                />
              </div>

              <div className="input-field-group">
                <label>Número de Celular *</label>
                <input
                  type="tel"
                  name="celular"
                  placeholder="Tu Número de celular"
                />
              </div>

              <div className="input-field-group full-width">
                <label>Correo Electrónico *</label>
                <input
                  type="email"
                  name="correo"
                  placeholder="nombre@ejemplo.com"
                />
              </div>

              <div className="input-field-group">
                <label>Marca de Interés</label>
                <select name="marca">
                  <option>Seleccionar</option>
                  <option>Nissan</option>
                  <option>Kia</option>
                  <option>Mazda</option>
                </select>
              </div>

              <div className="input-field-group">
                <label>Modelo</label>
                <select name="modelo">
                  <option>Seleccionar</option>
                  <option>Frontier</option>
                  <option>Sportage</option>
                </select>
              </div>

              <div className="input-field-group full-width">
                <label>Sede Preferida</label>
                <select name="sede">
                  <option>Seleccionar sede de atención</option>
                  <option>Sede Surquillo</option>
                  <option>Sede San Miguel</option>
                </select>
              </div>

              <div className="form-checkbox-group full-width">
                <label className="checkbox-control">
                  <input type="checkbox" name="aceptaPolitica" required />
                  <span className="checkbox-text">
                    He leído y acepto la <u>Política de Privacidad</u> y el
                    tratamiento de mis datos personales.
                  </span>
                </label>
                <label className="checkbox-control">
                  <input type="checkbox" name="aceptaPromociones" />
                  <span className="checkbox-text">
                    Deseo recibir promociones, lanzamientos y ofertas exclusivas
                    de Wigo Motors.
                  </span>
                </label>
              </div>

              <button type="submit" className="btn-submit-contacto full-width">
                SOLICITAR COTIZACIÓN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import logoWigoFooter from "../assets/Logo_Wigo_Footer.svg";
import americarBrand from "../assets/Americar_brand.svg";
import facebookIcon from "../assets/facebook-white.svg";
import instagramIcon from "../assets/instagram-white.svg";
import linkedinIcon from "../assets/linkedin-white.svg";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-col brand-col">
            <img
              src={logoWigoFooter}
              alt="Wigo Motors"
              className="footer-logo"
            />
            <div className="brand-info">
              <p>WIGO</p>
              <p>Central de citas: 7005510 o 017005510</p>
              <p>De lunes a domingo de 8:00 am a 8:00 pm</p>
            </div>
          </div>

          <div className="v-line"></div>

          <div className="footer-col">
            <h4 className="col-label">Compra</h4>
            <ul className="col-links">
              <li>
                <a href="#autos">Autos Nuevos</a>
              </li>
              <li>
                <a href="#seminuevos">Seminuevos</a>
              </li>
              <li>
                <a href="#financiamiento">Financiamiento</a>
              </li>
            </ul>
          </div>

          <div className="v-line"></div>

          <div className="footer-col">
            <h4 className="col-label">Postventa</h4>
            <ul className="col-links">
              <li>
                <a href="#taller">Agenda Taller</a>
              </li>
              <li>
                <a href="#repuestos">Repuestos Originales</a>
              </li>
              <li>
                <a href="#garantia">Garantía</a>
              </li>
            </ul>
          </div>

          <div className="v-line"></div>

          <div className="footer-col">
            <h4 className="col-label">Empresa</h4>
            <ul className="col-links">
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
              <li>
                <a href="#sucursales">Sucursales</a>
              </li>
              <li>
                <a href="#trabaja">Trabaja con nosotros</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <p className="disclaimer-text">
          Precios y bonos pueden variar sin previo aviso. Imágenes
          referenciales, para mayor información consulte términos y condiciones
          con su asesor de ventas.
        </p>
      </div>

      <div className="footer-bottom">
        <div className="bottom-container">
          <a href="#terminos" className="bottom-link">
            Términos y Condiciones
          </a>

          <div className="copyright-group">
            <span className="copyright-text">
              © 2026 <strong>Wigo</strong> | Todos los derechos reservados | Marca distribuida por |
            </span>
            <img src={americarBrand} alt="Americar" className="americar-logo" />
          </div>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="Linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

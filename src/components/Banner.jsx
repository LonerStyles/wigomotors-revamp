import { useState } from "react";
import FormSelect from "./FormSelect";
import bannerBg from "../assets/banner-BG.png";
import "../styles/Banner.css";

export default function Banner() {
  const [searchData, setSearchData] = useState({
    tipo: "nuevo",
    categoria: "sedan",
    marca: "ford",
    precio: "20000",
  });

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="banner-section-bg">
      <div className="banner-card">
        <div className="banner-image-area">
          <img className="banner-img" alt="Banner Auto" src={bannerBg} />

          <div className="banner-overlay-text">
            <h1 className="banner-title">Encuentra tu proximo auto</h1>
            <p className="banner-subtitle">
              Seguridad, confianza y las mejores marcas en un solo lugar.
            </p>
          </div>
        </div>

        <div className="banner-form-area">
          <div className="form-group">
            <label className="form-label">TIPO</label>
            <FormSelect
              name="tipo"
              value={searchData.tipo}
              onChange={handleSelectChange}
              options={[
                { value: "nuevo", label: "Nuevo" },
                { value: "seminuevo", label: "Seminuevo" },
              ]}
            />
          </div>

          <div className="form-group">
            <label className="form-label">CATEGORIA</label>
            <FormSelect
              name="categoria"
              value={searchData.categoria}
              onChange={handleSelectChange}
              options={[
                { value: "sedan", label: "Sedan" },
                { value: "suv", label: "SUV" },
              ]}
            />
          </div>

          <div className="form-group">
            <label className="form-label">MARCA</label>
            <FormSelect
              name="marca"
              value={searchData.marca}
              onChange={handleSelectChange}
              options={[
                { value: "ford", label: "Ford" },
                { value: "kia", label: "Kia" },
              ]}
            />
          </div>

          <div className="form-group">
            <label className="form-label">PRECIO MAXIMO</label>
            <FormSelect
              name="precio"
              value={searchData.precio}
              onChange={handleSelectChange}
              options={[
                { value: "20000", label: "$20,000" },
                { value: "30000", label: "$30,000" },
              ]}
            />
          </div>

          <button className="form-search-btn">Buscar</button>
        </div>
      </div>
    </div>
  );
}

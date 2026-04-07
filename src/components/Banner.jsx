import { useState } from "react";
import FormSelect from "./FormSelect";
import bannerBg from "../assets/banner-BG.png";
import autosData from "../catalogo.json";
import "../styles/Banner.css";

// Estados Iniciales FormSelect con valor por defecto
const opcionesMarcasDef = [
  { value: "", label: "Seleccionar", disabled: true },
  ...[...new Set(autosData.map((auto) => auto.marca))].map((marca) => ({
    value: marca,
    label: marca.charAt(0).toUpperCase() + marca.slice(1).toLowerCase(),
  })),
];
const opcionesTiposDef = [
  { value: "", label: "Seleccionar", disabled: true },
  ...[...new Set(autosData.map((auto) => auto.tipo))].map((tipo) => ({
    value: tipo,
    label: tipo.charAt(0).toUpperCase() + tipo.slice(1).toLowerCase(),
  })),
];
const opcionesCategoriasDef = [
  { value: "", label: "Seleccionar", disabled: true },
  ...[...new Set(autosData.map((auto) => auto.categoria))].map((categoria) => ({
    value: categoria,
    label: categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase(),
  })),
];

export default function Banner() {
  const [searchData, setSearchData] = useState({
    tipo: "",
    categoria: "",
    marca: "",
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
            <h1 className="banner-title">Encuentra tu próximo auto</h1>
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
              options={opcionesTiposDef}
            />
          </div>

          <div className="form-group">
            <label className="form-label">CATEGORIA</label>
            <FormSelect
              name="categoria"
              value={searchData.categoria}
              onChange={handleSelectChange}
              options={opcionesCategoriasDef}
            />
          </div>

          <div className="form-group">
            <label className="form-label">MARCA</label>
            <FormSelect
              name="marca"
              value={searchData.marca}
              onChange={handleSelectChange}
              options={opcionesMarcasDef}
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
                { value: "50000", label: "$40,000" },                
                { value: "100000", label: "$100,000" },
                { value: "200000", label: "$200,000" },
              ]}
            />
          </div>

          <button className="form-search-btn">Buscar</button>
        </div>
      </div>
    </div>
  );
}

import { ServiceBtn } from "./ServiceBtn";
import "../styles/NuestrosServicios.css";

export default function NuestrosServicios() {
  const serviciosData = [
    { id: 1, label: "Servicio Posventa", icon: "WI_-_Servicio_tecnico.svg" },
    {
      id: 2,
      label: "Financiamiento",
      icon: "WI_-_Opciones_de_financiamiento.svg",
    },
    { id: 3, label: "Seguros y GPS", icon: "WI_-_Seguros_automotriz.svg" },
    {
      id: 4,
      label: "Nuevos y Seminuevos",
      icon: "WI_-_Venta_de_vehiculos.svg",
    },
    { id: 5, label: "Compramos tu auto", icon: "WI_-_Compramos_tu_auto.svg" },
    {
      id: 6,
      label: "Flotas y Camiones",
      icon: "WI_-_Vendemos_flotas_y_camiones.svg",
    },
    {
      id: 7,
      label: "Repuestos y Accesorios",
      icon: "WI_-_Repuestos_y_accesorios.svg",
    },
    {
      id: 8,
      label: "Carrocería y Pintura",
      icon: "WI_-_Mantenimiento_prepagado.svg",
    },
  ];

  return (
    <div className="services-section">
      <h2 className="services-title">Nuestros Servicios</h2>

      <div className="services-grid">
        {serviciosData.map((servicio) => (
          <ServiceBtn
            key={servicio.id}
            iconName={servicio.icon}
            label={servicio.label}
          />
        ))}
      </div>
    </div>
  );
}

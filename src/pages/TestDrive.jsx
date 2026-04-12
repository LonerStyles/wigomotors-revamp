import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/TestDrive.css";

export default function TestDrive() {
  const [selectedDate, setSelectedDate] = useState(27);
  const [selectedTime, setSelectedTime] = useState("09:00 AM");

  const daysOfWeek = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"];

  const calendarDays = [
    { day: 24, disabled: true },
    { day: 25, disabled: true },
    { day: 26, disabled: true },
    { day: 27, disabled: false },
    { day: 28, disabled: false },
    { day: 29, disabled: false },
    { day: 30, disabled: false },
    { day: 31, disabled: false },
    { day: 1, disabled: false },
    { day: 2, disabled: false },
    { day: 3, disabled: false },
    { day: 4, disabled: false },
    { day: 5, disabled: false },
    { day: 6, disabled: false },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "02:30 PM",
    "04:00 PM",
    "05:30 PM",
  ];

  return (
    <div className="testdrive-container">
      <div className="testdrive-breadcrumbs">
        <span className="back-arrow">←</span>
        <span className="breadcrumb-link">MG GT</span>
        <span className="breadcrumb-separator">|</span>
        <span className="breadcrumb-current">Contacto</span>
      </div>

      <div className="testdrive-header-main">
        <h1>Reserva tu Test Drive</h1>
        <p>
          Completa tus datos en el siguiente formulario y reserva una fecha para
          probar el auto que desees.
        </p>
      </div>

      <div className="testdrive-card">
        <div className="car-preview-panel">
          <div className="brand-logo">
            <span className="logo-wigo">WIGO</span>
            <span className="logo-motors">MOTORS</span>
          </div>

          <div className="car-card-box">
            <img
              src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=400"
              alt="Mazda CX-5 Signature"
              className="car-img"
            />
            <div className="car-card-details">
              <h3>Mazda CX-5 Signature</h3>
              <p>Modelo 2026</p>
            </div>
          </div>

          <ul className="perks-list">
            <li>
              <span className="perk-icon">🕒</span>
              45 minutos de recorrido
            </li>
            <li>
              <span className="perk-icon">📍</span>
              Sede Surquillo, Lima
            </li>
            <li>
              <span className="perk-icon">👤</span>
              Asesor personalizado
            </li>
          </ul>

          <div className="requirements-box">
            <p className="req-title">Requisitos:</p>
            <p>• Licencia de conducir vigente.</p>
            <p>• Ser mayor de 21 años.</p>
          </div>
        </div>

        <div className="booking-scheduler-panel">
          <h3 className="section-subtitle">Selecciona fecha y hora</h3>

          <div className="month-navigation">
            <span className="current-month">Marzo 2026</span>
          </div>

          <div className="calendar-weekdays">
            {daysOfWeek.map((day) => (
              <div key={day} className="weekday-lbl">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-dates-grid">
            {calendarDays.map((item, index) => (
              <button
                key={index}
                className={`date-btn ${item.disabled ? "disabled" : ""} ${selectedDate === item.day && !item.disabled ? "active" : ""}`}
                disabled={item.disabled}
                onClick={() => setSelectedDate(item.day)}
              >
                {item.day}
              </button>
            ))}
          </div>

          <h4 className="time-section-title">
            Horarios disponibles para el {selectedDate} de Marzo:
          </h4>

          <div className="time-slots-grid">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`time-slot-btn ${selectedTime === slot ? "active" : ""}`}
                onClick={() => setSelectedTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>

          <div className="scheduler-footer">
            <span className="footer-notice">
              Se enviará una confirmación por correo.
            </span>
            <Link to="/contacto" state={{motivo: "testdrive"}}>
              <button className="btn-next-action">Siguiente</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

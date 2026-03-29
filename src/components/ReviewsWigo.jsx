import "../styles/ReviewsWigo.css";

export default function ReviewsWigo() {
  const reviews = [
    {
      id: 1,
      name: "Ricardo Mendoza",
      date: "Hace 2 semanas",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
      stars: "★★★★★",
      body: '"Excelente servicio desde que entras a la tienda. Compré un Kia Sportage y el asesor de ventas resolvió todas mis dudas de financiamiento. Trámite muy transparente."',
    },
    {
      id: 2,
      name: "Sofía Carranza",
      date: "Hace 1 mes",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
      stars: "★★★★★",
      body: '"Llevé mi auto a su taller para mantenimiento preventivo. El personal fue muy amable y el servicio rápido. Me entregaron el coche impecable y lavado."',
    },
    {
      id: 3,
      name: "Fernando De la Flor",
      date: "Hace 2 meses",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
      stars: "★★★★☆",
      body: '"Gran variedad de stock de autos seminuevos. El proceso de tasación de mi auto antiguo como parte de pago fue justo y rápido. Muy recomendado."',
    },
  ];

  return (
    <div className="reviews-wrapper">
      <div className="reviews-header">
        <div className="title-group">
          <h2 className="main-title">Confianza Wigo</h2>
          <p className="subtitle">
            Revisa las opiniones recientes de los clientes que han confiado en
            Wigo Motors
          </p>
        </div>
      </div>

      <div className="reviews-section">
        <div className="stats-block">
          <div className="google-badge">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="G"
              style={{ width: "16px" }}
            />
            Opiniones de Google
          </div>

          <h2>+5,000 Clientes Satisfechos</h2>
          <p>
            Nuestra prioridad es tu tranquilidad. Conoce por qué somos el
            concesionario líder preferido por las familias peruanas.
          </p>

          <div className="avatars">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
              alt="Cliente"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
              alt="Cliente"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
              alt="Cliente"
            />
            <div className="more-avatars">+4k</div>
          </div>

          <div className="rating-summary">
            <span className="rating-number">4.8</span>
            <span className="stars-gold">★★★★★</span>
            <span className="rating-count">(2480 reseñas)</span>
          </div>
        </div>

        <div className="google-reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="g-review-card">
              <div className="g-header">
                <div className="g-profile">
                  <img src={review.img} alt={review.name} />
                  <div>
                    <span className="g-name">{review.name}</span>
                    <span className="g-date">{review.date}</span>
                  </div>
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  className="g-logo"
                  alt="Google"
                />
              </div>
              <div className="stars-gold card-stars">{review.stars}</div>
              <p className="g-body">{review.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

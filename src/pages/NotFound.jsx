import { Link } from 'react-router-dom';

const NotFound = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: '80px 20px',
    backgroundColor: '#f4f4f4',
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '40px 60px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
  };

  const titleStyle = {
    fontSize: '4rem',
    margin: '0 0 10px 0',
    color: '#333',
    fontWeight: 'bold',
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    margin: '0 0 30px 0',
    color: '#666',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#ee3124',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>404</h1>
        <p style={subtitleStyle}>Oops! Página no encontrada.</p>
        <p style={{ fontSize: '1.1rem', color: '#888', marginBottom: '30px' }}>
          Lo sentimos, la ruta que buscas no existe o ha sido movida.
        </p>
        <Link to="/" style={buttonStyle}>
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
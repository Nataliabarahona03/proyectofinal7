import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        {/* Imagen de fondo. Reemplaza esta URL por una imagen tuya de alta calidad. */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop')" }}>
        </div>
        {/* Overlay oscuro para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Contenido del Hero */}
        <div className="relative max-w-4xl mx-auto px-4 py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Viste Tu Estilo. Define Tu Momento.
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300">
            Descubre nuestra colección exclusiva de poleras con diseños únicos que no encontrarás en ningún otro lugar.
          </p>
          <div className="mt-10">
            <Link to='/poleras' className='btn-primary'>
              Explorar la Colección
            </Link>
          </div>
        </div>
      </div>

      {/* Otras secciones (ej. Destacados, Categorías) pueden ir aquí */}
    </>
  );
};

export default Home;
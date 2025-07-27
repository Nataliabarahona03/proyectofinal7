import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/user/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { authStatus, verifyingUser, logoutUser } = userCtx;

  useEffect(() => {
    verifyingUser();
  }, [verifyingUser]); // Añadido verifyingUser al array de dependencias

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          {/* Logo de la tienda */}
          <Link to="/" className="text-2xl font-bold text-gray-900">
            UrbanTees
          </Link>

          {/* Menú Principal */}
          <ul className="flex items-center space-x-8">
            <li>
              <Link to="/poleras" className="font-semibold text-gray-600 hover:text-indigo-600 transition-colors">
                Colección
              </Link>
            </li>
            {/* Puedes añadir más enlaces aquí, ej: "Novedades", "Ofertas" */}
          </ul>

          {/* Autenticación y Perfil */}
          <section className="flex items-center justify-end">
            {authStatus ? (
              <>
                <Link to="/perfil" className="btn-nav">
                  Perfil
                </Link>

                <button onClick={() => logoutUser(navigate)} className="btn-logout" title="Cerrar Sesión">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </>
            ) : (
              <>
                <Link to="/iniciar-sesion" className="btn-nav">
                  Iniciar Sesión
                </Link>
                <Link to="/registro" className="ml-4 inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700">
                  Crear Cuenta
                </Link>
              </>
            )}
          </section>
        </nav>
      </div>
    </header>
  );
};

export default Header;
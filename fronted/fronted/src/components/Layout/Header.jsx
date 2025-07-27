import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/user/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { authStatus, verifyingUser, logoutUser } = userCtx;

  useEffect(() => {
    verifyingUser();
  }, []);
  return (
    <header className="bg-green-600">
      <nav className="flex justify-between mx-8 py-4">
        <ul className="flex items-center">
          <li className="hidden ml-10 text-neutral-50 md:block">
            <Link to="/guitarras" className="font-medium">
              Menú
            </Link>
          </li>
        </ul>
        <section className="flex items-center justify-end">
          {authStatus ? (
            <>
              <Link to="/perfil" className="btn-nav">
                Perfil
              </Link>

              <Link to="/" className="btn-nav" onClick={() => logoutUser(navigate)}>
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
              </Link>

              {/* <Link to="/carrito" className="btn-cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className="btn-cart-quantity">{total}</span>
              </Link> */}
            </>
          ) : (
            <>
              <Link to="/registro" className="btn-nav">
                Crear cuenta
              </Link>
              <Link to="/iniciar-sesion" className="btn-nav">
                Iniciar sesión
              </Link>
            </>
          )}
        </section>
      </nav>
    </header>
  );
};

export default Header;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserState from "./contexts/user/UserState";
// import ProductState from "./contexts/product/ProductState"; // Renombrado para futuro
import GuitarState from "./contexts/guitar/GuitarState"; // Mantengo el original por ahora
import Layout from "./components/Layout";
import Home from "./components/Home/index";
import ProductList from "./components/Guitar/List"; // Renombrado para claridad
import SingleProduct from "./components/Guitar/Single"; // Renombrado para claridad
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profile from "./components/Profile/index";
import Auth from "./routes/Auth";
import PrivateRoute from "./routes/Private";

const Router = () => {
  return (
    <>
      <UserState>
        {/* Idealmente, renombra GuitarState a ProductState en tus contextos */}
        <GuitarState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="registro" element={<Register />} />
                <Route
                  path="iniciar-sesion"
                  element={<Auth component={Login} />}
                />
                <Route
                  path="perfil"
                  element={<PrivateRoute component={Profile} />}
                />
                {/* RUTAS ACTUALIZADAS */}
                <Route path="poleras" element={<ProductList />} />
                <Route path="poleras/:id" element={<SingleProduct />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </GuitarState>
      </UserState>
    </>
  );
};

export default Router;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserState from "./contexts/user/UserState";
import GuitarState from "./contexts/guitar/GuitarState";
import Layout from "./components/Layout";
import Home from "./components/Home/index";
import GuitarList from "./components/Guitar/List";
import SingleGuitar from "./components/Guitar/Single";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profile from "./components/Profile/index";
import Auth from "./routes/Auth";
import PrivateRoute from "./routes/Private";

const Router = () => {
  return (
    <>
      <UserState>
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
                <Route path="guitarras" element={<GuitarList />} />
                <Route path="guitarras/:id" element={<SingleGuitar />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </GuitarState>
      </UserState>
    </>
  );
};

export default Router;

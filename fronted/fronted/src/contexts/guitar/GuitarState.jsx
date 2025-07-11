import { useReducer } from "react";
import GuitarContext from "./GuitarContext";
import GuitarReducer from "./GuitarReducer";
import axiosClient from "../../config/axios";

const GuitarState = (props) => {
  const initialState = {
    guitars: []
  };

  const [globalState, dispatch] = useReducer(GuitarReducer, initialState);

  const getGuitars = async () => {
    try {
      const res = await axiosClient.get("/guitars"); // http://localhost:3000/api/guitars
      dispatch({
        type: "OBTENER_GUITARRAS",
        payload: res.data.guitarras,
      });
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <GuitarContext.Provider
      value={{
        guitars: globalState.guitars,
        getGuitars
      }}
    >
      {props.children}
    </GuitarContext.Provider>
  );
};

export default GuitarState;

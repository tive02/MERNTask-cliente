import React, { useReducer } from "react";
import Tareacontext from "./tareaContext";
import tareaReducer from "./tareaReducer";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir Plataforma", estado: true },
      { nombre: "Elegir Colores", estado: false },
      { nombre: "Elegir Plataforma de pago", estado: false },
      { nombre: "Elegir Hosting", estado: true },
    ],
  };
  //crear el Dispatch y el
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  return <Tareacontext.Provider>{props.children}</Tareacontext.Provider>;
};

export default TareaState;
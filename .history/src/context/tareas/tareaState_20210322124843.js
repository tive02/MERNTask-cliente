import React, { useReducer } from "react";
import Tareacontext from "./tareaContext";
import tareaReducer from "./tareaReducer";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 2 },
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 4 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 3 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 4 },
      { nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 1 },
      { nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 2 },
      { nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 3 },
      { nombre: "Elegir Plataforma de pago", estado: false, proyectoId: 4 },
      { nombre: "Elegir Hosting Fontend", estado: true, proyectoId: 1 },
      { nombre: "Elegir Hosting Backend", estado: true, proyectoId: 2 },
      { nombre: "Elegir Plataforma de diseño", estado: true, proyectoId: 3 },
      {
        nombre: "Elegir Plataforma de A/B Testing",
        estado: true,
        proyectoId: 4,
      },
    ],
  };
  //crear el Dispatch y el
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  return (
    <Tareacontext.Provider value={{ tareas: state.tareas }}>
      {props.children}
    </Tareacontext.Provider>
  );
};

export default TareaState;

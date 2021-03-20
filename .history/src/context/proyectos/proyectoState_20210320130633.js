import React, { useReducer } from "react";
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types/Index";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño de sitio Web" },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
  };
  //Dispatch para ejecutar acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //Serie de Funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //OBtener los Proyectos
  const obtenerPoyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerPoyectos,
      }}>
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;

import React, { useReducer } from "react";
import { FORMULARIO_PROYECTO } from "../../types/Index";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const ProyectoState = (props) => {
  const initialState = {
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

  return (
    <proyectoContext.Provider
      value={{ formulario: state.formulario, mostrarFormulario }}>
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;

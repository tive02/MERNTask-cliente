import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
} from "../../types/Index";
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
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };
  //Agregar Nuevo Proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();
    //Insertar el proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTOS,
      payload: proyecto,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
      }}>
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;

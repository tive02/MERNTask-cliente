import React, { useReducer } from "react";
import {
  AGREGAR_TAREA,
  TAREAS_PROYECTO,
  ERROR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,, TAREA_ACTUAL
} from "../../types/Index";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Plataforma", estado: true, proyectoId: 2 },
      { id: 3, nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { id: 4, nombre: "Elegir Plataforma", estado: true, proyectoId: 4 },
      { id: 5, nombre: "Elegir Colores", estado: false, proyectoId: 1 },
      { id: 6, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { id: 7, nombre: "Elegir Colores", estado: false, proyectoId: 3 },
      { id: 8, nombre: "Elegir Colores", estado: false, proyectoId: 4 },
      { id: 9, nombre: "Elegir  pago", estado: false, proyectoId: 1 },
      { id: 10, nombre: "Elegir e pago", estado: false, proyectoId: 2 },
      { id: 11, nombre: "Elegir  pago", estado: false, proyectoId: 3 },
      { id: 12, nombre: "Elegir  pago", estado: false, proyectoId: 4 },
      { id: 13, nombre: "ElegirHostingFontend", estado: true, proyectoId: 1 },
      { id: 14, nombre: "ElegirHostingBackend", estado: true, proyectoId: 2 },
      { id: 15, nombre: "Elegir diseño", estado: true, proyectoId: 3 },
      { id: 16, nombre: "Elegir diseño", estado: true, proyectoId: 3 },
      { id: 17, nombre: "Otra actividad", estado: true, proyectoId: 4 },
      { id: 18, nombre: "Elegir A/B Testing", estado: true, proyectoId: 4 },
    ],
    tareasproyecto: null,
    errortarea: false,
  };
  //crear el Dispatch y el
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //Crear las funciones
  //obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };
  //Agregar las tareas
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };
  //Error tarea
  const validarTarea = () => {
    dispatch({
      type: ERROR_TAREA,
    });
  };
  //Eliminar tarea
  const eliminarTarea = (tarea) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: tarea,
    });
  };
  //Cambia el Estado de la tarea.
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };
  //Extrae una Tarea Actual Para Edicion 
const guardarTareaActual=tarea=>{
  dispatch({
    type: TAREA_ACTUAL,
    payload:tarea
  })
}

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
      }}>
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;

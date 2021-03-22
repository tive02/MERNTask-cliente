import React, { useReducer } from "react";
import {
  AGREGAR_TAREA,
  TAREAS_PROYECTO,
  ERROR_TAREA,
  ELIMINAR_TAREA,
} from "../../types/Index";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

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
      { nombre: "Elegir Plataforma de diseño", estado: true, proyectoId: 3 },
      { nombre: "Otra actividad", estado: true, proyectoId: 4 },
      {
        nombre: "Elegir Plataforma de A/B Testing",
        estado: true,
        proyectoId: 4,
      },
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

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
      }}>
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;

import React, { useReducer } from "react";
import {
  AGREGAR_TAREA,
  TAREAS_PROYECTO,
  ERROR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
} from "../../types/Index";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import clienteAxios from "../../config/axios";

const TareaState = (props) => {
  const initialState = {
    tareasproyecto: [],
    errortarea: false,
    tareaseleccionada: null,
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
  const agregarTarea = async (tarea) => {
    try {
      const resultado = await clienteAxios.post("/api/tareas", tarea);
      console.log(resultado);
      dispatch({
        type: AGREGAR_TAREA,
        payload: tarea,
      });
    } catch (error) {
      console.log(error);
    }
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
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };
  //Fn para editar o modificar una tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
      }}>
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;

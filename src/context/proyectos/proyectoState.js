import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  PROYECTO_ERROR,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types/Index";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import clienteAxios from "../../config/axios";

const ProyectoState = (props) => {
  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
    mensaje: null,
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
  const obtenerProyectos = async () => {
    try {
      const resultado = await clienteAxios.get("/api/proyectos");
      dispatch({
        type: OBTENER_PROYECTOS,
        payload: resultado.data.proyectos,
      });
    } catch (error) {
      const alerta = {
        msg: "upss.. el error es nuestro vuelve a intentarlo",
        categoria: "alerta-error",
      };
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta,
      });
    }
  };
  //Agregar Nuevo Proyecto
  const agregarProyecto = async (proyecto) => {
    try {
      const resultado = await clienteAxios.post("/api/proyectos", proyecto);
      console.log(resultado);
      //Insertar el proyecto en el state
      dispatch({
        type: AGREGAR_PROYECTOS,
        payload: resultado.data,
      });
    } catch (error) {
      const alerta = {
        msg: "upss.. el error es nuestro vuelve a intentarlo",
        categoria: "alerta-error",
      };
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta,
      });
    }
  };

  //VALIDAR EL FORMULARIO
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  //Selecciona el PRoyecto que el usuario dio click
  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  //Eliminar los proyectos
  const eliminarProyecto = async (proyectoId) => {
    try {
      await clienteAxios.delete(`/api/proyectos/${proyectoId}`);

      dispatch({
        type: ELIMINAR_PROYECTO,
        payload: proyectoId,
      });
    } catch (error) {
      const alerta = {
        msg: "upss.. el error es nuestro vuelve a intentarlo",
        categoria: "alerta-error",
      };
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta,
      });
    }
  };
  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mensaje: state.mensaje,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto,
      }}>
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;

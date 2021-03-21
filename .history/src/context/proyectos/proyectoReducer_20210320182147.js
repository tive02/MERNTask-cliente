import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  VALIDAR_FORMULARIO,
} from "../../types/Index";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };

    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };
    case AGREGAR_PROYECTOS:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
      };
    case AGREGAR_PROYECTOS:
      return {
        ...state,
        errorformulario: false,
      };
    default:
      return state;
  }
};

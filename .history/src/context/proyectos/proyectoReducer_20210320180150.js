import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
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
    default:
      return state;
  }
};

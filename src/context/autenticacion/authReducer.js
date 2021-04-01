import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types/Index";

const alertaReducer = (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
      };
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        mensaje: action.payload,
      };
    default:
      break;
  }
};

export default alertaReducer;

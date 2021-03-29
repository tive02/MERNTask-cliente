import { MOSTRAR_ALERTA, OCULAR_ALERTA } from "../../types/Index";

const alertaReducer = (state, action) => {
  switch (action.type) {
    case MOSTRAR_ALERTA:
      return { alerta: action.payload };
    case OCULAR_ALERTA:
      return { alerta: null };
    default:
      break;
  }
};

export default alertaReducer;

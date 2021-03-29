import React, { useReducer } from "react";
import { MOSTRAR_ALERTA, OCULAR_ALERTA } from "../../types/Index";
import alertaReducer from "./alertaReducer";
import alertaContex from "./alertaContext";

const AlertaState = (props) => {
  const initialState = {
    alerta: null,
  };

  const [state, dispatch] = useReducer(alertaReducer, initialState);
  //Funciones de mostrar alerta
  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria,
      },
    });
    //Despues de 5 segundos limpiar la alerta
    setTimeout(() => {
      dispatch({
        type: OCULAR_ALERTA,
      });
    }, 5000);
  };
  return (
    <alertaContex.Provider
      value={{
        alerta: state.alerta,
        mostrarAlerta,
      }}>
      {props.children}
    </alertaContex.Provider>
  );
};

export default AlertaState;

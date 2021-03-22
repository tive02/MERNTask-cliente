import React, { useReducer } from "react";
import Tareacontext from "./tareaContext";
import tareaReducer from "./tareaReducer";

const TareaState = (props) => {
  const initialState = {
    tareas: [],

    //crear el Dispatch y el 
    const [state, dispatch] = useReducer(tareaReducer, initialState)

  };
};

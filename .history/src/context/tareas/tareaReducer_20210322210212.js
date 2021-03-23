import {
  AGREGAR_TAREA,
  TAREAS_PROYECTO,
  ERROR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
} from "../../types/Index";

export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasproyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };
    case ACTUALIZAR_TAREA:
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [action.payload, ...state.tareas],
        errortarea: false,
      };
    case ERROR_TAREA:
      return {
        ...state,
        errortarea: true,
      };
    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareasproyecto.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea
        ),
      };
    case TAREA_ACTUAL:
      return {
        ...state,
        tareaseleccionada: action.payload,
      };
    default:
      return state;
  }
};

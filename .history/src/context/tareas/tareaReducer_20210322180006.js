import {
  AGREGAR_TAREA,
  TAREAS_PROYECTO,
  ERROR_TAREA,
  ELIMINAR_TAREA,
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
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
        errortarea: false,
      };
    case ERROR_TAREA:
      return {
        ...state,
        errortarea: true,
      };
    case ELIMINAR_TAREA:
      return {};
    default:
      return state;
  }
};

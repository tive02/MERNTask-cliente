import { AGREGAR_TAREA, TAREAS_PROYECTO, ERROR_TAREA } from "../../types/Index";

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
      };
    case ERROR_TAREA:
      return {
        ...state,
        errortarea: true,
      };
    default:
      return state;
  }
};

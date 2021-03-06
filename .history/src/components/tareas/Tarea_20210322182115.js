import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  //Context de los proyectos

  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  // Context de las tareas
  const tareasContext = useContext(TareaContext);
  const { eliminarTarea, obtenerTareas } = tareasContext;

  //extraer el proyecto
  const [proyectoActual] = proyecto;

  //Funcion que se ejecuta cuando ek usuario presiona el btn de eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id);
  };
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;

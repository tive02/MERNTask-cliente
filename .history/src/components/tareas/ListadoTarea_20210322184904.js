import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import Tarea from "./Tarea";

const ListadoTarea = () => {
  //Extraer Proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //Extraer Proyectos del state inicial
  const tareasContext = useContext(TareaContext);
  const { tareasproyecto } = tareasContext;

  //Si no hay un proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un Proyecto</h2>;

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;
  const tareasProyecto = tareasproyecto;

  //Funcion para eliminar un proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };
  return (
    <Fragment>
      <h2> Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay Tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasProyecto.map((tarea) => (
              <CSSTransition>
                <Tarea key={tarea.id} tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}>
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTarea;

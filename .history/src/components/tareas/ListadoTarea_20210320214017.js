import React, { Fragment, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Tarea from "./Tarea";

const ListadoTarea = () => {
  //Extraer Proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;
  //Si no hay un proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un Proyecto</h2>;

  //Array detructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;
  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Plataforma de pago", estado: false },
    { nombre: "Elegir Hosting", estado: true },
  ];

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
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
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

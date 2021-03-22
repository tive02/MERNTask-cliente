import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareacontext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  //Obtener el State Del proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;
  //Obtener el state de las tareas
  const tareasContext = useContext(tareacontext);
  const { obtenerTareas } = tareasContext;

  //Funcion para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); //Fijar un proyecto Actual
    obtenerTareas(id); // Filtrar las tareas cuando se ejecuten
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-black"
        onClick={() => seleccionarProyecto(proyecto.id)}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;

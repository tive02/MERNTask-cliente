import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyecto = ({ proyecto }) => {
  //Obtener el State Del proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;
  //Obtener el state de las tareas

  //Funcion para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-black"
        onClick={() => proyectoActual(proyecto.id)}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;

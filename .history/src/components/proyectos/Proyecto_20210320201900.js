import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyecto = ({ proyecto }) => {
  //Obtener el State Del proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-black"
        onClick={() => proyectoActual}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;

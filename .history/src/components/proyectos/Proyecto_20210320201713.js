import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext);
  const {} = proyectosContext;

  return (
    <li>
      <button type="button" className="btn btn-black">
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;

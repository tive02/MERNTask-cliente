import React, { useContext } from "react";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);

  const { formulario, mostrarFormulario } = proyectosContext;
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;

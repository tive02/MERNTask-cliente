import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;

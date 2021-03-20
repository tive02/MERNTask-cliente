import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Fragment>
      <button className="btn btn-block btn-primario" type="button">
        Nuevo Proyecto
      </button>
      <form className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          onChange={onChangeProyecto}
        />
        <input
          type="submit"
          className="btn btn-block btn-primario"
          value="Agregar Proyecto"
        />
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;

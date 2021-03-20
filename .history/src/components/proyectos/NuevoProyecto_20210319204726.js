import React, { Fragment } from "react";

const NuevoProyecto = () => {
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
        />
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;

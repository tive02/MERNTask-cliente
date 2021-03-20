import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
  //State para el proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  // Extraer nombre del proyecto
  const { nombre } = proyecto;

  //Lee el contenido del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };
  //cuando el usuario envia el proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <button className="btn btn-block btn-primario" type="button">
        Nuevo Proyecto
      </button>
      <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          onChange={onChangeProyecto}
          value={nombre}
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

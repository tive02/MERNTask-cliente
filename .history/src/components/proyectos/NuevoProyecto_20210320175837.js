import React, { Fragment, useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);

  const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;

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
    //Validar el proyecto
    if (nombre === "") {
      return;
    }
    //Agregar al State
    agregarProyecto(proyecto);

    //Reiniciar el form
  };

  //MOSTRAR EL FORMULARIO
  const onClickFormulario = () => {
    mostrarFormulario();
  };
  return (
    <Fragment>
      <button
        className="btn btn-block btn-primario"
        type="button"
        onClick={onClickFormulario}>
        Nuevo Proyecto
      </button>
      {formulario ? (
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
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;

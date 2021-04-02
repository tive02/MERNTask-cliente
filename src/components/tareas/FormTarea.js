import React, { useContext, useEffect, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  //Extraer Proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  //Estraer
  const tareasContext = useContext(TareaContext);
  const {
    tareaseleccionada,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
  } = tareasContext;

  //Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);

  //State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });
  //Destructuring tarea
  const { nombre } = tarea;

  //Si no hay un proyecto seleccionado
  if (!proyecto) return null;

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Leer los valores del Formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitTarea = (e) => {
    e.preventDefault();
    //Validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }
    //Si es edicion o es nueva tarea
    if (tareaseleccionada === null) {
      //Agregar la nueva Tarea al state de tarea
      tarea.proyecto = proyectoActual._id;
      agregarTarea(tarea);
    } else {
      //actualizar tarea existente
      actualizarTarea(tarea);
    }

    //Obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

    //Reiniar el Form
    guardarTarea({
      nombre: "",
    });
  };
  return (
    <div className="formulario">
      <form onSubmit={onSubmitTarea}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
        {errortarea ? (
          <p className="mensaje error">El nombre de la Tarea es Obligatoria</p>
        ) : null}
      </form>
    </div>
  );
};

export default FormTarea;

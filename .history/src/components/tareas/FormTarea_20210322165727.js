import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  //Extraer Proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  //Estraer
  const tareasContext = useContext(TareaContext);
  const {} = tareasContext;

  //State del formulario
  const [tarea, guardarTarea] = useState(initialState);
  //Si no hay un proyecto seleccionado
  if (!proyecto) return null;

  const onSubmitTarea = (e) => {
    e.preventDefault();
    //Validar
    //PAsar la Validacion
    //Agregar la nueva Tarea al state de tarea

    //Reiniar el Form
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
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;

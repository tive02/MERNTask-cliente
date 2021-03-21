import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {
  //Extraer Proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  //Si no hay un proyecto seleccionado
  if (!proyecto) return null;
  return (
    <div className="formulario">
      <form>
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

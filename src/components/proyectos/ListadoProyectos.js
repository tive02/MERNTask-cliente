import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AlertaContext from "../../context/alertas/alertaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  //Extraer proyectos de State inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, mensaje, obtenerProyectos } = proyectosContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;
  //Obtener proyectos cuando carga un componenete
  useEffect(() => {
    //si hay un error
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    obtenerProyectos();
    // eslint-disable-next-line
  }, [mensaje]);
  //Revisar si proyectos tiene contenido
  if (proyectos.length === 0)
    return <p>No Hay proyectos, Comienza Creando Uno</p>;

  return (
    <ul className="listado-proyectos">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;

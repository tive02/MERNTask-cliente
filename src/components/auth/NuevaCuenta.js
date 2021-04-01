import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";

const NuevaCuenta = () => {
  //Extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;
  //state de auth
  const authContext = useContext(AuthContext);
  const { registrarUsuario } = authContext;

  //State Para Iniciar Sesión
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });
  //Extraer los valores de usuarios
  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //Validar que no existan campos vacios
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los Campos son Obligatorios", "alerta-error");
      return;
    }
    //Password de por lo menos 6 caracteres
    if (password.length < 6) {
      mostrarAlerta(
        "El password debe tener por lo menos 6 caracteres",
        "alerta-error"
      );
    }
    //Los dos passwords son iguales
    if (password !== confirmar) {
      mostrarAlerta("Las contraseñas no son iguales", "alerta-error");
    }
    //pasarlo al action
    registrarUsuario({
      nombre,
      email,
      password,
    });
  };

  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Crea una Cuenta</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre </label>
            <input
              type="nombre"
              id="nombre"
              name="nombre"
              value={nombre}
              placeholder="Tu Nombre"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Tu Email"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Tu Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password </label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              value={confirmar}
              placeholder="Repite tu Pasword"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;

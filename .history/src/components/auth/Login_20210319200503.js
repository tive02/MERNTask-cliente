import React, { useState } from "react";

const Login = () => {
  //State Para Iniciar Sesión
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });
  //Extraer los valores de usuarios
  const { email, password } = usuario;

  const onChange = () => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

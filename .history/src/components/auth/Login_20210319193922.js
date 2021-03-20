import React from "react";

const Login = () => {
  const onChange = () => {};
  return (
    <div className="form-usuarios">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form>
          <div className="campo-form">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              onChange={onChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

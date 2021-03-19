import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaConsulta from "./components/auth/NuevaConsulta";
import Proyectos from "./components/proyectos/Proyectos";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={<Login />} />
        <Route exact path="/nueva-cuenta" component={<NuevaConsulta />} />
        <Route exact path="/proyectos" component={<Proyectos />} />
      </Switch>
    </Router>
  );
}

export default App;

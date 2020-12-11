import React, { Fragment, useState } from "react";
import { Error } from "./Error";

export const Pregunta = ({guardarPresupuesto,guardarRestante,actualizarPregunta}) => {
  //definir states
  const [cantidad, guardarCantidad] = useState(0);
  const [error, seterror] = useState(false);

  //funcion para definir presupuesto
  const definirPresupuesto = (e) => {
    e.preventDefault();
    guardarCantidad(parseInt(e.target.value), 10);
  };

  //submit para agregar presupuesto
  const agregarpresupuesto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      seterror(true);
      return;
    }
    //si pasa la validacion
    seterror(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarpresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

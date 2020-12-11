import React, { useState } from "react";
import { Error } from "./Error";
import shortid from "shortid";

export const Formularios = ({ guardarGasto,guardarCrearGasto }) => {
  //definir state
  const [nombre, guardarNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //funcion agregar nombre
  const agregarNombre = (e) => {
    guardarNombre(e.target.value);
  };

  //funcion agregar cantidad
  const guardarCantidad = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  //funcion de submit para agregar gastos
  const agregarGastos = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    //pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    //resetear formulario
    guardarNombre("");
    setCantidad(0);
  };

  return (
    <form onSubmit={agregarGastos}>
      <h2>Agrega tus gatos</h2>
      {error ? (
        <Error mensaje="El ingreso es incorrecto o hay campos vacios" />
      ) : null}
      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={agregarNombre}
          value={nombre}
        />
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={guardarCantidad}
          value={cantidad}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="agregar gasto"
      />
    </form>
  );
};

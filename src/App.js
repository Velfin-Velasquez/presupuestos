import React, { useState,useEffect } from "react";
import { ControlPresupuesto } from "./components/ControlPresupuesto";
import { Formularios } from "./components/Formularios";
import { Listado } from "./components/Listado";
import { Pregunta } from "./components/Pregunta";

export const App = () => {
  //defiir states
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [pregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  //useEffect que actualiza el restante
  useEffect(() => {

    if (crearGasto) {
      //agrega el nuevo presupuesto
      guardarGastos([...gastos, gasto]);

      //resta del presupuesto actual
      const presupuestoactual = restante -gasto.cantidad;
      guardarRestante(presupuestoactual);


      //reseterar al falso
      guardarCrearGasto(false);
    }
  }, [gasto,crearGasto,gastos,restante])



  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>
        <div className="contenido-principal contenido">
          {pregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formularios guardarGasto={guardarGasto} guardarCrearGasto={guardarCrearGasto}/>
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto presupuesto={presupuesto} restante={restante}/>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

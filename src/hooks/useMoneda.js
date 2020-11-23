import React, { useState } from "react";

const useMoneda = (label, stateInicial, opciones) => {
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => (
    <>
      <label>{label}</label>
      <select onChange={(e) => actualizarState(e.target.value)} value={state}>
        <option value="">-- Seleccione una Moneda ---</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </>
  );

  // Retornar state , interfaz y modificador state

  return [state, Seleccionar, actualizarState];
};
export default useMoneda;

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptoMoneda from "../hooks/useCriptoMoneda";
import axios from "axios";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
`;

const Formulario = () => {
  const [listaCripto, guardarCriptoMonedas] = useState([]);
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "libra esterlina" },
  ];
  const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", "", MONEDAS);
  const [criptoMoneda, SelectCripto] = useCriptoMoneda(
    "Elige tu CriptoMoneda",
    "",
    listaCripto
  );

  //Ejecutar llamado a Api

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      guardarCriptoMonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);
  return (
    <form>
      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;

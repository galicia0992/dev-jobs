import React from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useState } from "react";
import Buscador from "./Buscador";
import BuscadorPais from "./BuscadorPais";

const LinkContenedor = styled(Link)`
  text-decoration: none;
`;
const ContGral = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
    width: 100%;
  }
   
`
const TrabajoContainer = styled.div`
  width: 327px;
  height: 248px;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 55px;
  color: black;
  text-decoration: none;
  padding: 0 25px 0 25px;
`;
const EmpresaLogoCont = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background-color: black;
  position: relative;
  bottom: 25px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img``;
const Posicion = styled.h1`
  font-size: 20px;
  line-height: 24.8px;
  font-weight: 700;
  font-family: "Kumbh Sans", sans-serif;
`;
const Compañia = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.84px;
  color: rgba(110, 128, 152, 1);
`;
const Ubicacion = styled.p`
  font-size: 14;
  font-weight: 700;
  line-height: 17.36px;
  color: rgba(89, 100, 224, 1);
  margin-top: 40px;
`;
const Desde = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: rgba(110, 128, 152, 1);
`;
const Contenedor = styled.div`
  position: relative;
  bottom: 40px;
`;
const Trabajos = () => {
  const [importParams, setImportParams] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(importParams);
  if (searchParams.get("filterPais")) {
    console.log("lal")
  }else(
    console.log("lol")
  )
  const { data } = useLoaderData();
  console.log(data);
  return (
    <>
      <Contenedor className="d-flex align-items-center justify-content-center">
        <Buscador setImportParams={setImportParams}></Buscador>
        <BuscadorPais setImportParams={setImportParams}></BuscadorPais>
      </Contenedor>
      <div className="d-flex justify-content-center align-items-center">
      <ContGral>
        {searchParams.get("filter") ?
        data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let pos = item.position.toLowerCase();
            return pos.includes(filter.toLocaleLowerCase());
          })
          .map((item) => (
            <LinkContenedor to={`/${item.id}`} key={item.id}>
              <TrabajoContainer>
                <EmpresaLogoCont
                  style={{ backgroundColor: item.logoBackground }}
                >
                  <Logo src={item.logo}></Logo>
                </EmpresaLogoCont>
                <Desde>
                  <p>
                    {item.postedAt} {"°"}{" "}
                  </p>

                  <p>
                    {"°"} {item.contract}
                  </p>
                </Desde>
                <Posicion>{item.position}</Posicion>
                <Compañia>{item.company}</Compañia>
                <Ubicacion>{item.location}</Ubicacion>
              </TrabajoContainer>
            </LinkContenedor>
          )):data
          .filter((item) => {
            let filterPais = searchParams.get("filterPais");
            if (!filterPais) return true;
            let loc = item.location.toLowerCase();
            return loc.includes(filterPais.toLocaleLowerCase());
          })
          .map((item) => (
            <LinkContenedor to={`/${item.id}`} key={item.id}>
              <TrabajoContainer>
                <EmpresaLogoCont
                  style={{ backgroundColor: item.logoBackground }}
                >
                  <Logo src={item.logo}></Logo>
                </EmpresaLogoCont>
                <Desde>
                  <p>
                    {item.postedAt} {"°"}{" "}
                  </p>

                  <p>
                    {"°"} {item.contract}
                  </p>
                </Desde>
                <Posicion>{item.position}</Posicion>
                <Compañia>{item.company}</Compañia>
                <Ubicacion>{item.location}</Ubicacion>
              </TrabajoContainer>
            </LinkContenedor>
          ))}
      </ContGral>
      </div>
    </>
  );
};

export default Trabajos;
export const loaderTrabajos = async () => {
  const response = await fetch("http://localhost:3000/positions");
  const data = await response.json();

  return { data };
};

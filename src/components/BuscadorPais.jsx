import React from "react";
import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";

const Buscar = styled.input`
  width: 327px;
  height: 70px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Posicionador = styled.div`
  width: 327px;
  height: 80px;
  position: absolute;
`
const FilterIcon = styled.img`
  position: absolute;
  width: 25px;
  top: 28px;
  left: 200px;
`;
const LupaBtn = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 7px;
  background-color: rgba(89, 100, 224, 1);
  padding: 10px;
  position: relative;
  top: 15px;
  left: 250px;
`;
const BuscadorPais = ({setImportParams}) => {
  const [searchParams, setSearchParams] = useSearchParams()
    const parametrosPais = (e) =>{
        let filterPais = e.target.value
        if(filterPais){
            setSearchParams({filterPais})
        }else{
            setSearchParams({})
        }
        setImportParams(searchParams)
    }
  return (
    <>
      <Buscar onChange={parametrosPais} value={searchParams.get("filterPais") || ""} placeholder="Filter by title" className="form-control"></Buscar>
    </>
  );
};

export default BuscadorPais;

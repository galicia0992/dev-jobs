import React from "react";
import styled from "@emotion/styled";
import filterIcon from "../assets/mobile/icon-filter.svg";
import lupa from "../assets/mobile/lupa.svg";
import { useSearchParams } from "react-router-dom";

const Buscar = styled.input`
  width: 327px;
  height: 70px;
  @media (min-width: 768px) {
    width: 466px;
    margin-right: 20px;
  padding: 0 65px 0 65px;
  }
`;
const Posicionador = styled.div`
  width: 327px;
  height: 80px;
  position: absolute;
  @media (min-width: 768px) {
    left: 20%;
    width: 20px;
  }
  @media (min-width: 820px) {
    left: 1%;
    width: 20px;
  }
  @media (min-width: 912px) {
    left: 7%;
    width: 20px;
  }
  @media (min-width: 1024px) {
    left: 12%;
    width: 20px;
  }
  @media (min-width: 1280px) {
    left: 19%;
    width: 20px;
  }
  @media (min-width: 1440px) {
    left: 26.5%;
    width: 20px;
  }
`
const FilterIcon = styled.img`
  position: absolute;
  width: 25px;
  top: 28px;
  left: 200px;
  @media (min-width: 768px) {
    display: none;
  }
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
  @media (min-width: 768px) {
    left: 0;
    background-color: white;
  }
  
`;
const Buscador = ({setImportParams}) => {
  const [searchParams, setSearchParams] = useSearchParams()
    const parametros = (e) =>{
        let filter = e.target.value
        if(filter){
            setSearchParams({filter})
        }else{
            setSearchParams({})
        }
        setImportParams(searchParams)
    }
  return (
    <>
      <Posicionador>
      <FilterIcon src={filterIcon} alt="" srcset="" />
      <LupaBtn src={lupa}></LupaBtn>
      </Posicionador>
      <Buscar type="search" onChange={parametros} value={searchParams.get("filter") || ""} placeholder="Filter by Position" className="form-control"></Buscar>
    </>
  );
};

export default Buscador;

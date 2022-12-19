import React from 'react'
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import ReturnBtn from './ReturnBtn';
const TrabajoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 327px;
  height: 248px;
  border-radius: 10px;
  background-color: white;
  color: black;
  text-decoration: none;
  padding: 0 25px 0 25px;
  position: relative;
  bottom: 60px;
  @media (min-width: 768px){
    width: 700px;
    height: 120px;
    flex-direction: row;
    border-radius: 0;
    padding: 0 30px 0 0;
  }
`;
const EmpresaLogoCont = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background-color: black;
  position: relative;
  bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    border-radius: 0;
    bottom: 0;

  }
`;
const Logo = styled.img`
@media (min-width: 768px) {
  width: 50%;
}
`;
const AcoPag = styled.div`
  @media (min-width: 768px){
    margin-left: 5%;
    margin-right: 35%;
  }
`
const BotonCompany = styled.button`
width: 150px;
height: 50px;
border-radius: 5px;
background: #5964e03e;
border: none;
`;
const Pagina = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.84px;
  color: rgba(110, 128, 152, 1);
`;
const Compañia = styled.h1`
  font-size: 20px;
  line-height: 24.8px;
  font-weight: 700;
  font-family: "Kumbh Sans", sans-serif;
`;
const CompanySite = styled.p`
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #5964e0;
  margin: 0;
`
const JobCard = ({data}) => {
    
  return (
    <>
    <ReturnBtn></ReturnBtn>
      <div className="d-flex align-items-center justify-content-center">
      {
        <TrabajoContainer>
          <EmpresaLogoCont style={{ backgroundColor: data.logoBackground }}>
            <Logo src={data.logo}></Logo>
          </EmpresaLogoCont>
          <AcoPag>
          <Compañia>{data.company}</Compañia>
          <Pagina>{`${data.company}.com`}</Pagina>
          </AcoPag>
          <Link to={`${data.website}`}>
            <BotonCompany>
            <CompanySite>
                {"Company Site"}
              </CompanySite>
            </BotonCompany>
          </Link>
        </TrabajoContainer>
      }
      </div>
    </>
  )
}

export default JobCard

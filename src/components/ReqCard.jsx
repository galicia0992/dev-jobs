import React from "react";
import styled from "@emotion/styled";

const TrabajoContainer = styled.div`
  width: 327px;
  height: auto;
  border-radius: 10px;
  background-color: white;
  text-decoration: none;
  padding: 25px;
  @media (min-width: 768px) {
    width: 72%;
  }
`;
const Desde = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
`;
const BotonApply = styled.button`
  width: 100%;
  height: 50px;
  background: rgba(89, 100, 224, 1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
  margin-bottom: 30px;
`;
const BotonApply2 = styled.button`
  width: 70%;
  height: 50px;
  background: rgba(89, 100, 224, 1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
`;
const BtnApplyCont = styled.div`
    width: 100%;
    height: 96px;
    margin-top: 35px;
    border-radius: 15px 15px 0 0;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ApplyBtn = styled.p`
  font-family: "Kumbh Sans";
  font-weight: 700;
  font-size: 16px;
  color: white;
  line-height: 20px;
  margin: 0;
`;
const Compañia = styled.h1`
  font-size: 20px;
  line-height: 24.8px;
  font-weight: 700;
  font-family: "Kumbh Sans", sans-serif;
`;
const Ubicacion = styled.p`
  font-size: 14;
  font-weight: 700;
  line-height: 17.36px;
  color: rgba(89, 100, 224, 1);
  margin-bottom: 60px;
`;
const NumList = styled.p`
  color: rgba(89, 100, 224, 1);
  font-family: "Kumbh Sans";
  font-weight: 700;
  font-size: 16px;
  margin-right: 20px;
`;
const ReqCard = ({ data }) => {
  const arr = [data.requirements];
  const arr2 = [data.role];
  console.log(data.requirements);
  console.log(data);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        {arr.map((item) => (
          <TrabajoContainer key={data.id}>
            <div className="d-flex flex-column align-items-start justify-content-start ">
              <Desde>
                <p>{data.postedAt}</p>
                <p>{data.contract}</p>
              </Desde>
              <Compañia>{data.company}</Compañia>
              <Ubicacion>{data.location}</Ubicacion>
            </div>
            <BotonApply>
              <ApplyBtn>Apply Now</ApplyBtn>
            </BotonApply>
            <div className="mb-5">{item.content}</div>
            {item.items.map((item2) => (
              <li className="mb-3">{item2}</li>
            ))}
            <h1>What You Will Do</h1>
            {arr2.map((item3) => (
              <>
                <div className="mb-3">{item3.content}</div>
                {item3.items.map((item4, i) => (
                  <div className="d-flex flex-row">
                    <NumList>{i + 1}</NumList>
                    <p>{item4}</p>
                  </div>
                ))}
              </>
            ))}
          </TrabajoContainer>
        ))}
        <BtnApplyCont>
        <BotonApply2>
          <ApplyBtn>Apply Now</ApplyBtn>
        </BotonApply2>
        </BtnApplyCont>
      </div>
    </>
  );
};

export default ReqCard;

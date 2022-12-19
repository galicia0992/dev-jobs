import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const BotonReturn = styled.button`
width: 100px;
height: 40px;
border-radius: 5px;
background: #7d85de;
color: white;
font-size: 16px;
font-weight: 700;
font-family: 'Kumbh Sans', sans-serif;
border: none;
position: relative;
top: -110px;
left: 250px;
`;
const ReturnBtn = () => {
  return (
    <Link to={"/"}>
      <BotonReturn>Return</BotonReturn>
    </Link>
  )
}

export default ReturnBtn
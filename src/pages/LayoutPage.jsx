import React from 'react'
import styled from '@emotion/styled'
import headerImg from "../assets/mobile/bg-pattern-header.svg"
import { Outlet } from 'react-router-dom'
const BgHead = styled.img`
    width: 100%;
    height: 150px;
    background-color: rgba(89, 100, 224, 1);
`
const DevJobs = styled.h1`
    color: white;
    font-size: 35px;
    position: absolute;
    top: 5%;
    left: 10%;
`
const LayoutPage = () => {
  return (
    <>
    <BgHead src={headerImg}></BgHead>
    <DevJobs>devjobs</DevJobs>
    <Outlet></Outlet>
    </>
  )
}

export default LayoutPage
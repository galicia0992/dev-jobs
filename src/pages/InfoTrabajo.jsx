import React from "react";
import JobCard from "../components/JobCard";
import ReqCard from "../components/ReqCard";
import { useLoaderData } from "react-router-dom";

const InfoTrabajo = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <>
      <JobCard data={data}></JobCard>
      <ReqCard data={data}></ReqCard>
    </>
  );
};

export default InfoTrabajo;
export const loaderTrabajo = async ({ params }) => {
  const response = await fetch(`http://localhost:3000/positions/${params.id}`);
  const data = await response.json();

  return { data };
};
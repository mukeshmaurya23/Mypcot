import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error } = useRouteError();
  console.log(error);
  return (
    <div className="text-center text-white p-4 m-5 text-4xl font-semibold"></div>
  );
};

export default ErrorPage;

import React from "react";
import { Navigate, Outlet } from "react-router";
import { getAuthenticated } from "../utils/authCookies";

function PrivateRoute() {
  const isAuthenticated = getAuthenticated();

  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />}</>;
}

export default PrivateRoute;

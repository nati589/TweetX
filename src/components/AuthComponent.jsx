import React from "react";
import { Navigate, Outlet } from "react-router";
import { getAuthenticated } from "../utils/authCookies";

function AuthComponent() {
  const isAuthenticated = getAuthenticated();

  return <>{!isAuthenticated ? <Outlet /> : <Navigate to="/" replace />}</>;
}

export default AuthComponent;

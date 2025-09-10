import { Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';

function PrivateRouter() {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRouter;

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated, checkAuth } = useAuth();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, [location]);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children ?? <Navigate to="/home" replace />;
};

export default PrivateRoute;
